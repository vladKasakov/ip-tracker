type Props = {
  message: string;
};

export const MyError = ({ message }: Props) => {
  return (
    <div style={{ color: 'red', textAlign: 'center', marginTop: 50 }}>
      {message}
    </div>
  );
};
