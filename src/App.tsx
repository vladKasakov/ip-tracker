import { useState } from 'react';

import { CustomMap } from './components/CustomMap';
import { Header } from './components/Header';
import { MyError } from './components/MyError';
import { useGetLocationByIPQuery } from './services/location';

function App() {
  const [IP, setIP] = useState('');
  const { data, isFetching, isError } = useGetLocationByIPQuery(IP);

  return (
    <>
      <Header data={data} setIP={setIP} isFetching={isFetching} />
      {isError && (
        <MyError
          message="Something went wrong... The API key may have expired, please contact
        the author"
        />
      )}
      {data && <CustomMap location={data.location} />}
    </>
  );
}

export default App;
