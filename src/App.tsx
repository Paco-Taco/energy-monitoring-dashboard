import { Tabs, TabsProps } from 'antd';
import MainLayout from '../components/MainLayout';
import PowerCharts from './components/PowerCharts';
// import { ChartConfig } from './components/ui/chart';

function App() {
  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Laboratorio de IoT',
      children: <PowerCharts />,
    },
    {
      key: '2',
      label: 'Laboratorio de Sistemas Eléctricos de Potencia',
      children: <PowerCharts />,
    },
  ];

  return (
    <MainLayout>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </MainLayout>
  );
}

export default App;
