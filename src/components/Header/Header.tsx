import { ILocationResponse } from '../../models';
import { Container } from '../Container';
import { CustomInput } from '../CustomInput';
import styles from './Header.module.scss';
import { Info } from './Info';

type Props = {
  data: ILocationResponse | undefined;
  setIP: (str: string) => void;
  isFetching: boolean;
};

export const Header = ({ data, setIP, isFetching }: Props) => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.wrapper}>
          <h1>IP Address Tracker</h1>
          <CustomInput
            guestIP={data?.ip}
            setIP={setIP}
            isFetching={isFetching}
          />
          <Info
            ip={data && data.ip}
            isp={data && data.isp}
            location={data && data.location}
            isFetching={isFetching}
          />
        </div>
      </Container>
    </header>
  );
};
