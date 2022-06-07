import cn from 'classnames';
import { isIPv6 } from 'is-ip';
import { useEffect, useState } from 'react';

import { ReactComponent as Arrow } from '../../../assets/icon-arrow.svg';
import { useMatchMedia } from '../../../hooks';
import { ILocation } from '../../../models';
import styles from './Info.module.scss';

type Props = {
  ip: string | undefined;
  location: ILocation | undefined;
  isp: string | undefined;
  isFetching: boolean;
};

export const Info = ({ ip, isp, location, isFetching }: Props) => {
  const isMobile = useMatchMedia('(max-width: 549px)');
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (!isMobile) {
      setIsOpen(true);
    }
  }, [isMobile]);

  return (
    <div className={cn(styles.info, { [styles.loading]: isFetching })}>
      {isMobile && (
        <div className={styles.togglebtn} onClick={handleToggle}>
          <Arrow
            className={cn({
              [styles.open]: isOpen,
            })}
          />
        </div>
      )}
      {isOpen ? (
        <>
          <div>
            <span>ip address</span>
            {ip ? (
              <p className={cn({ [styles.ipv6]: isIPv6(ip) })}>{ip}</p>
            ) : (
              <div className={styles.plug} />
            )}
          </div>
          <hr />
          <div>
            <span>location</span>
            {location ? (
              <p>
                {location.region}, {location.city}
                {''}
                {location.postalCode && ', ' + location.postalCode}
              </p>
            ) : (
              <div className={styles.plug} />
            )}
          </div>
          <hr />
          <div>
            <span>timezone</span>
            {location ? (
              <p>UTC {location.timezone}</p>
            ) : (
              <div className={styles.plug} />
            )}
          </div>
          <hr />
          <div>
            <span>isp</span>
            {isp ? <p>{isp}</p> : <div className={styles.plug} />}
          </div>
        </>
      ) : (
        <div>
          <span>location</span>
          {location ? (
            <p>
              {location.region}, {location.city}
              {''}
              {location.postalCode && ', ' + location.postalCode}
            </p>
          ) : (
            <div className={styles.plug} />
          )}
        </div>
      )}
    </div>
  );
};
