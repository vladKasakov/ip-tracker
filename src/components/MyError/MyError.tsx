type Props = {
  message: string;
};

export const MyError = ({ message }: Props) => {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: '3rem',
        zIndex: 9999,
        color: 'red',
        textAlign: 'center',
        marginTop: 50,
      }}
    >
      {message}
    </div>
  );
};
