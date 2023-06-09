import styled from 'styled-components';
import BarChart from '../../charts/BarChart';
import PieChart from '../../charts/PieCharts';
import RadarChart from '../../charts/RadarCharts';

const Main = styled.main`
  display: flex;
  flex-direction: column;
`;

export default function Dashboard() {


  return (
    <Main className="center">

      <div>
        <h1>Gráfico Barra</h1>
        <div>
          <BarChart />
        </div>
      </div>

      <div>
        <h1>Gráfico Pizza</h1>
        <div>
          <PieChart />
        </div>
      </div>

      <div>
        <h1>Gráfico Radar</h1>
        <div>
          <RadarChart />
        </div>
      </div>
    </Main>
  );
}
