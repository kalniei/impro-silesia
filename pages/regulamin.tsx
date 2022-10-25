import { Grid, Typography } from '@mui/material';

const RegulationPage = (): JSX.Element => {
  return (
    <Grid container py={4} px={8}>
      <Grid item xs={12}>
        <Typography variant="h2">Regulamin Szkoły Impro Silesia</Typography>
      </Grid>

      <Grid item xs={12} mt={2}>
        <ol>
          <li>
            <Typography variant="h5">Kontakt i obsługa</Typography>
            <Typography variant="body1" mt={1}>
              Preferowanym sposobem komunikacji z nami jest adres mailowy{' '}
              <b>biuro@improsilesia.pl</b> lub telefon <b>502059434</b>
            </Typography>
          </li>

          <li>
            <Typography variant="h5" mt={1}>
              Zwroty pieniędzy
            </Typography>
            <ul>
              <li>
                <Typography variant="body1" mt={1}>
                  W przypadku odwołania warsztatów przez Impro Silesia, pieniądze wpłacone na ich
                  poczet zostaną w całości niezwłocznie zwrócone.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" mt={1}>
                  W przypadku rezygnacji uczestnika z warsztatów pieniądze zostaną zwrócone w
                  całości, pod warunkiem odpowiednio wczesnej rezygnacji. Zwrot pieniędzy nie
                  przysługuje, jeśli uczestnik zrezygnuje z kursu później niż 7 dni przed jego
                  rozpoczęciem.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" mt={1}>
                  W przypadku warsztatów, dla których obowiązuje promocja „niezobowiązujące
                  warsztaty” – warunkiem zwrotu pieniędzy jest pojawienie się na pierwszych
                  warsztatach lub rezygnacja najpóźniej 7 dni przed rozpoczęciem warsztatów.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" mt={1}>
                  Prośby o zwrot pieniędzy w innych przypadkach będą rozpatrywane indywidualnie i
                  prosimy o kierowanie ich na adres <b>biuro@improsilesia.pl</b>
                </Typography>
              </li>
            </ul>
          </li>

          <li>
            <Typography variant="h5" mt={1}>
              Zachowanie na warsztatach i występach
            </Typography>
            <ul>
              <li>
                <Typography variant="body1" mt={1}>
                  Warsztaty z improwizacji są zajęciami grupowymi, w związku z tym mogą przebiegać
                  właściwie tylko wtedy, gdy wszyscy uczestnicy będą przestrzegali pewnego zestawu
                  zasad. Pozwoli to na pracę w komfortowych warunkach oraz maksymalne wykorzystanie
                  poświęcone czasu. Zasady udziału w warsztatach Instruktorzy będą przedstawiali na
                  początku zajęć. W przypadku świadomego i notorycznego łamania owych zasad, dany
                  uczestnik może zostać wyproszony z zajęć. Instruktor może również zakazać mu
                  wejścia na kolejny warsztat.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" mt={1}>
                  Spożywanie jakichkolwiek używek (w szczególności alkoholu i narkotyków) jest
                  zakazane w trakcie zajęć i bezpośrednio przed nimi. Osoby pod wpływem wymienionych
                  substancji nie zostaną dopuszczone do warsztatów.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" mt={1}>
                  Zajęcia często wymagają wspólnych ćwiczeń, również fizycznych. Prosimy zwróć uwagę
                  na swoją higienę.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" mt={1}>
                  W przypadku odwołania warsztatów przez Impro Silesia, pieniądze wpłacone na ich
                  poczet zostaną w całości niezwłocznie zwrócone.
                </Typography>
              </li>
            </ul>
          </li>

          <li>
            <Typography variant="h5" mt={1}>
              Występy po warsztatach
            </Typography>
            <ul>
              <li>
                <Typography variant="body1" mt={1}>
                  Zakończenie ukończenie serii niektórych warsztatów zwieńczone jest publicznym
                  występem improwizowanym, traktowanym jako zakończenie zajęć.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" mt={1}>
                  Miejsce i termin występu zostanie podany najpóźniej na dwa tygodnie przed
                  wydarzeniem.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" mt={1}>
                  Występ nie jest „obowiązkowym egzaminem”, jest za to doskonałą zabawą i okazją do
                  sprawdzenia nabytych umiejętności w warunkach scenicznych. Występ nie jest
                  obowiązkowy. Decyzję podejmuje grupa i indywidualnie każdy warsztatowicz.
                </Typography>
              </li>
            </ul>
          </li>

          <li>
            <Typography variant="h5" mt={1}>
              Odwoływanie zajęć
            </Typography>
            <ul>
              <li>
                <Typography variant="body1" mt={1}>
                  Prowadzący warsztaty są aktywnymi improwizatorami, aktorami a także ludźmi,
                  dlatego może się zdarzyć konieczność odwołania lub zmiany terminu zajęć.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" mt={1}>
                  Impro Silesia zastrzega sobie możliwość zmiany prowadzącego konkretne zajęcia.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" mt={1}>
                  Instruktor może również poprosić uczestników warsztatów o zmianę godziny.
                  Uczestnicy kursu muszą zostać o tym fakcie poinformowani maksymalnie 24h przed
                  zajęciami.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" mt={1}>
                  Zmiana instruktora lub terminu zajęć nie jest podstawą do zwrotu pieniędzy, chyba
                  że będzie dotyczyć ponad połowy zajęć w kursie.{' '}
                </Typography>
              </li>
              <li>
                <Typography variant="body1" mt={1}>
                  Wszystkie odwołane zajęcia zostaną odrobione po wspólnym uzgodnieniu dogodnej daty
                  przez instruktora i uczestników.{' '}
                </Typography>
              </li>
            </ul>
          </li>
        </ol>
      </Grid>
    </Grid>
  );
};

export default RegulationPage;
