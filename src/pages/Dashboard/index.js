import { Card, Header } from './styles';

export default function Dashboard() {
  return (
    <>
      <Header>
        <small>Filtrar</small>
        <select name="date" id="date">
          <option value=""></option>
          <option value="1">1 dia</option>
          <option value="7">7 dias</option>
          <option value="15">15 dias</option>
          <option value="30">30 dias</option>
          <option value="90">90 dias</option>
        </select>
        <h1>Campanhas</h1>
      </Header>

      <Card>
        <div className="ad-name">
          <small>Ativo</small>
          <h1>Publicação do instagram: Tem presente para as...</h1>
        </div>
        <div className="card-info">
          <div>
            <strong>0</strong>
            <p>Conversas por mensagens iniciadas</p>
          </div>
          <div>
            <strong>R$0,00</strong>
            <p>Custo por conversas por mensagens iniciadas</p>
          </div>
          <div>
            <strong>R$16,14</strong>
            <p>Valor Usado</p>
          </div>
        </div>
      </Card>
    </>
  );
}
