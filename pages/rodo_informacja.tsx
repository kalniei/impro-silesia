import { Grid, Typography } from '@mui/material';

const RodoPage = (): JSX.Element => {
  return (
    <Grid container py={4} px={8}>
      <Grid item xs={12}>
        <Typography variant="h2">Informacje na temat przetwarzania danych osobowych</Typography>
      </Grid>

      <Grid item xs={12} mt={2}>
        <Typography variant="body1">
          Administratorem podanych danych osobowych jest Fundacja Impro Silesia z siedzibą w
          Katowicach przy ul. Kopernika 14. Podanie danych jest dobrowolne ale niezbędne w celu
          cyklicznej wysyłki newslettera. Podane dane będą przetwarzane na podstawie art. 6 ust. 1
          lit. a zgodnie z treścią Ogólnego Rozporządzenia o Ochronie Danych Osobowych z dnia 27
          kwietnia 2016 r. Administrator Danych nie powołał Inspektora Ochrony Danych, niemniej w
          kwestiach związanych z ochroną danych osobowych możesz się kontaktować na adres mail:
          improsilesia@gmail.com Dane osobowe będą przechowywane do momentu cofnięcia zgody na
          przesyłanie newslettera.
        </Typography>
      </Grid>

      <Grid item xs={12} mt={4}>
        <Typography variant="body1" fontWeight={600}>
          Osobie, której dane dotyczą przysługuje prawo do:
        </Typography>

        <ul>
          <li>
            dostępu do treści swoich danych, ich sprostowania, usunięcia, ograniczenia
            przetwarzania, prawo do przenoszenia danych, prawo do cofnięcia zgody w dowolnym
            momencie bez wpływu na zgodność z prawem przetwarzania;
          </li>
          <li>
            wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych gdy uzna, iż przetwarzanie
            danych osobowych narusza przepisy Ogólnego Rozporządzenia o Ochronie Danych Osobowych z
            dnia 27 kwietnia 2016 r.
          </li>
        </ul>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h2">Information on the processing of personal data</Typography>
      </Grid>

      <Grid item xs={12} mt={2}>
        <Typography variant="body1">
          The administrator of the personal data provided is the Impro Silesia Foundation with its
          registered office in Katowice at ul. Copernicus 14. Providing data is voluntary but
          necessary to cyclically send the newsletter. The given data will be processed on the basis
          of art. 6 par. 1 lit. and pursuant to the General Regulation on Personal Data Protection
          of 27 April 2016, the Data Administrator has not appointed a Data Protection Officer,
          however, in matters related to the protection of personal data, you can contact the
          following address: improsilesia@gmail.com Personal data will be stored until you withdraw
          your consent to send the newsletter.
        </Typography>
      </Grid>

      <Grid item xs={12} mt={4}>
        <Typography variant="body1" fontWeight={600}>
          The data subject has the right to:
        </Typography>

        <ul>
          <li>
            access to their data, rectification, deletion, processing restrictions, data transfer
            rights, the right to withdraw consent at any time without affecting the lawfulness of
            processing;
          </li>
          <li>
            lodging a complaint to the President of the Office for Personal Data Protection when he
            / she considers that the processing of personal data violates the provisions of the
            General Regulation on the Protection of Personal Data of 27 April 2016.
          </li>
        </ul>
      </Grid>
    </Grid>
  );
};

export default RodoPage;
