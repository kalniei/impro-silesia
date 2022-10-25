import axios, { AxiosResponse, AxiosError } from 'axios';
import moment from 'moment-mini-ts';
import { IBasicWorkshopObj } from '../ts/interfaces';
import { request } from './restClient';

const instance = axios.create();

export const getPrice = (workshopDetails: IBasicWorkshopObj): number => {
  if (!workshopDetails) return 0;
  if (!workshopDetails.price_date || !workshopDetails.price_sale)
    return workshopDetails.price_normal;

  const saleDate = moment(workshopDetails?.price_date, 'DD/MM/YYYY');

  return !moment().isAfter(saleDate, 'day')
    ? workshopDetails.price_sale
    : workshopDetails.price_normal;
};

export const createPaymentLink = async (formData: {email: string, name_surname: string}, workshopDetails: IBasicWorkshopObj): Promise<any>=> {
  const sessionId = '_' + Math.random().toString(36).substr(2, 9);

  const startRegistartion = async (data: any, sign: string) => {
    try {
      const basicAuth =
        'Basic ' +
        Buffer.from(
          process.env.NEXT_PUBLIC_MERCHANT_ID + ':' + process.env.NEXT_PUBLIC_SECRET_ID
        ).toString('base64');

      const tempObj = {
        merchantId: process.env.NEXT_PUBLIC_MERCHANT_ID,
        posId: process.env.NEXT_PUBLIC_MERCHANT_ID,
        sessionId: sessionId,
        amount: getPrice(workshopDetails) + '00',
        currency: 'PLN',
        description: workshopDetails?.name,
        transferLabel: workshopDetails?.name,
        email: data?.email,
        client: data?.name_surname,
        regulationAccept: true,
        country: 'PL',
        language: 'pl',
        urlStatus: process.env.NEXT_PUBLIC_API_URL + '/transactionVerification',
        urlReturn: 'http://localhost:3000/payment/confirmation',
        sign: sign
      };

      const completeLink = await instance
        .post(process.env.NEXT_PUBLIC_PAYMENT_API + '/api/v1/transaction/register', tempObj, {
          headers: { Authorization: basicAuth }
        })
        .then(({ data: response }: AxiosResponse) => {
          const link = process.env.NEXT_PUBLIC_PAYMENT_API + `/trnRequest/${response.data.token}`;
          return link;
        })
        .catch((error: AxiosError) => {
          console.log(error);
        });

      return completeLink;
    } catch {
      return 'Coś poszło nie tak z rejestracją płatnośći'
    }
  };

  const generateSign = async (formData: any) => {
    try {
      const { data } = await request('post', '/sha384Code', {
        sessionId: sessionId,
        merchantId: Number(process.env.NEXT_PUBLIC_MERCHANT_ID),
        amount: Number(getPrice(workshopDetails) + '00'),
        currency: 'PLN',
        crc: process.env.NEXT_PUBLIC_CRC_KEY
      });
      return data;
    } catch (error: any) {
      return 'Coś poszło nie tak z wygenerowaniem znaku';
    }
  };

  try {
    const sign = await generateSign(formData);
    const generatedLink = await startRegistartion(formData, sign);
    return generatedLink;
  } catch {
    return 'Coś poszło nie tak z płatnośćą'
  }

};
