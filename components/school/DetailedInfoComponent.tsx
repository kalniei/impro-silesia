import { Grid, Box, Typography, Button, Card, CardContent, ListItem, List } from '@mui/material';
import Colors from '../../helpers/Colors';

interface IInfoObj {
  title: string;
  positions: string[];
}

interface PageProps {
  scrollToWorkshops: () => void;
}

const infoArr: IInfoObj[] = [
  {
    title: 'Szukasz rozwoju?',
    positions: [
      '- Brakuje Ci <b>pewności siebie</b>? Boisz się oceny? Boisz się zagadać?',
      '- Często krytycznie oceniasz swoje pomysły? Długo analizujesz zamiast działać?',
      '- Podczas warsztatów w atmosferze <b>akceptacji</b>, pozytywnej <b>energii</b> i bardzo dobrej <b>zabawy</b> rozwijamy umiejętności miękkie.',
      '- Poprzez ćwiczenia i gry rozwiniesz <b>uważność i słuchanie</b> dzięki temu będziesz mógł bardziej skupić się na tym co tu i teraz i odgonić destrukcyjne myśli.',
      '- <b>Uderzymy w wewnętrznego</b> krytyka niczym Rocky Balboa. Zmienimy podejście do błędów.',
      '- Staniesz się <b>bardziej spontaniczny</b> i otwarty, wyjdziesz naładowany pozytywną energią i radością, co przełoży się na lepsze samopoczucie na co dzień, zyskasz <b>większy luz</b> w kontakcie z ludźmi.'
    ]
  },
  {
    title: 'Jesteś artystyczną duszą?',
    positions: [
      '- Zawsze marzyłeś o scenie?',
      '- Brakuje Ci artystycznego hobby?',
      '- Chcesz improwizować? Wyżyć się artystycznie?',
      '- Lubisz aktorstwo lub chciałbyś spróbować, ale nie lubisz uczyć sie tekstu?',
      '- Odkryjesz w sobie niewyczerpane pokłady kreatywności!',
      '- Nauczymy cię technik impro, które pozwalają tworzyć na poczekaniu sceny, historie i postaci, nierzadko lepsze niż te skrupulatnie zaplanowane!',
      '- Uczymy każdego - niezależnie od poziomu doświadczenia. Zobacz ścieżkę rozwoju.',
      '- Dajemy Ci możliwość występowania od 1 dnia podczas naszych wydarzeń.',
      '- Będziesz mógł stworzyć lub dołączyć do grupy impro.'
    ]
  },
  {
    title: 'WYSTĘPUJESZ? CHCESZ WYSTĘPOWAĆ PRZED LUDŹMI?',
    positions: [
      '- Stresuje Cię sama myśl o mówieniu do ludzi?',
      '- Występujesz przed ludźmi, ale jest to dla Ciebie trudne i wiąże się z dużym stresem?',
      '- Trening improwizacji pomaga okiełznać stres sceniczny.',
      '- Rozwiniesz uważność i zdobędziesz większy luz  co pozwoli Ci nawiązywać lepszy, autentyczny kontakt z publiczością.',
      '- Będzie Ci łatwiej zachować spokój, w zaskakujących sytuacjach.',
      '- Będziesz tak samo dobry gdy ludzie patrzą jak wtedy gdy nie patrzą!'
    ]
  },
  {
    title: 'PRACUJESZ Z LUDŹMI?',
    positions: [
      '- Jesteś leaderem? Trenerem? Facylitatorem?',
      '- Chcesz zostać leaderem?',
      '- Spotkania wyglądają zawsze tak samo?',
      '- Burze mózgów to udręka?',
      '- Zespół nie angażuje się w projekt?',
      '- Chcesz rozwinąć kreatywność zespołu?',
      '- Szukasz urozmaicenia Twoich warsztatów, spotkań?',
      '- Zdobędziesz narzędzia, które będziesz mógł wykorzystać w swojej pracy z ludźmi.'
    ]
  }
];

const DetailedInfoComponent = ({ scrollToWorkshops }: PageProps): JSX.Element => {
  return (
    <Grid item xs={12} py={6} px={2} sx={{ backgroundColor: Colors.mainOrange }}>
      <Box className="maxWidth">
        <Grid container>
          {infoArr.map((x: IInfoObj, key: number) => (
            <Card key={key} sx={{ my: 2, borderRadius: 5 }}>
              <CardContent>
                <Grid container>
                  <Grid item mt={2} mb={3} pl={2} xs={12}>
                    <Typography variant="h1">{x.title}</Typography>
                  </Grid>
                  <Grid item sx={{ pl: { xs: 1, sm: 2, md: 4 } }} xs={12}>
                    {x.positions.map((item: string, index: number) => (
                      <ListItem key={index}>
                        <Typography variant="body1" dangerouslySetInnerHTML={{ __html: item }} />
                      </ListItem>
                    ))}
                  </Grid>
                  <Grid container mt={4} pl={2}>
                    <Button variant="custom" onClick={scrollToWorkshops}>
                      Zapisz się
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Box>
    </Grid>
  );
};

export default DetailedInfoComponent;
