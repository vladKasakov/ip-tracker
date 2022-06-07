import cn from 'classnames';
import { FormikErrors, useFormik } from 'formik';
import { isIP } from 'is-ip';
import { useEffect, useRef } from 'react';

import { ReactComponent as Arrow } from '../../assets/icon-arrow.svg';
import { FormValues } from '../../models';
import styles from './CustomInput.module.scss';

type Props = {
  guestIP: string | undefined;
  setIP: (str: string) => void;
  isFetching: boolean;
};

export const CustomInput = ({ setIP, isFetching, guestIP }: Props) => {
  const formik = useFormik({
    validateOnBlur: true,
    validateOnChange: false,
    initialValues: {
      ip: '',
    },

    validate: (values: FormValues) => {
      const errors: FormikErrors<FormValues> = {};

      if (!isIP(values.ip.trim())) {
        errors.ip = 'Enter a valid IP address';
      }

      return errors;
    },

    onSubmit: ({ ip }) => {
      setIP(ip);
    },
  });

  const inputRef = useRef<HTMLInputElement | null>(null);
  const counterRef = useRef(0);

  useEffect(() => {
    const input = inputRef.current;

    if (!counterRef.current && input && guestIP) {
      input.placeholder = 'Your IP is ' + guestIP;
      counterRef.current += 1;
    }
  }, [guestIP]);

  return (
    <form
      onSubmit={formik.handleSubmit}
      className={cn({
        [styles.custominput]: true,
      })}
    >
      <input
        ref={inputRef}
        autoComplete="off"
        id="ip"
        name="ip"
        type="text"
        defaultValue={formik.values.ip}
        onChange={formik.handleChange}
      />
      {formik.errors.ip ? (
        <div className={styles['error-message']}>{formik.errors.ip}</div>
      ) : null}
      <button type="submit" className={styles.submit} disabled={isFetching}>
        <Arrow className={cn({ [styles.animate]: isFetching })} />
      </button>
    </form>
  );
};
