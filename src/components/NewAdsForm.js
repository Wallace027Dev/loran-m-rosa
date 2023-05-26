/* import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Input from './Input';
import Button from './Button';

function NewAdsForm({ onCreatedAd }) {
  // data that will be saved in the form
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [countClicks, setCountClicks] = useState(0);
  const [initMessage, setInitMessage] = useState(0);
  const [metric, setMetric] = useState(0);
  const [impressions, setImpressions] = useState(0);
  const [newFollowers, setNewFollowers] = useState(0);
  const [newSales, setNewSales] = useState(0);
  const [newRecords, setNewRecords] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // data present in the 'newAd' object
    const newAd = {
      id: uuid(),
      name,
      date,
      countClicks,
      initMessage,
      metric,
      impressions,
      newFollowers,
      newSales,
      newRecords,
    };

    // creating component that will send the data to the 'user' page
    onCreatedAd(newAd);

    setName('');
    setDate('');
    setCountClicks(0);
    setInitMessage(0);
    setMetric(0);
    setImpressions(0);
    setNewFollowers(0);
    setNewSales(0);
    setNewRecords(0);
  };

  const handleNumericInputChange = (e, setValue) => {
    const inputValue = parseInt(e.target.value);
    if (inputValue >= 0) {
      setValue(inputValue);
    }
  };

  return (
    // form that will be rendered on the user page when clicking
    //  the 'criar novo anuncio' button
    <form noValidate onSubmit={handleSubmit}>
      <h3>Nome</h3>
      <Input
        type="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Digite o nome do anúncio..."
      />
      <h3>Data</h3>
      <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <h3>Cliques</h3>
      <Input
        type="number"
        value={countClicks}
        onChange={(e) => handleNumericInputChange(e, setCountClicks)}
      />
      <h3>Mensagens Iniciadas</h3>
      <Input
        type="number"
        value={initMessage}
        onChange={(e) => handleNumericInputChange(e, setInitMessage)}
      />
      <h3>Métrica de Alcance</h3>
      <Input
        type="number"
        value={metric}
        onChange={(e) => handleNumericInputChange(e, setMetric)}
      />
      <h3>Impressões</h3>
      <Input
        type="number"
        value={impressions}
        onChange={(e) => handleNumericInputChange(e, setImpressions)}
      />
      <h3>Novos Seguidores</h3>
      <Input
        type="number"
        value={newFollowers}
        onChange={(e) => handleNumericInputChange(e, setNewFollowers)}
      />
      <h3>Vendas</h3>
      <Input
        type="number"
        value={newSales}
        onChange={(e) => handleNumericInputChange(e, setNewSales)}
      />
      <h3>Cadastros</h3>
      <Input
        type="number"
        value={newRecords}
        onChange={(e) => handleNumericInputChange(e, setNewRecords)}
      />

      <Button type="submit">
        <h3>Enviar dados</h3>
      </Button>
    </form>
  );
}

export default NewAdsForm;
 */
