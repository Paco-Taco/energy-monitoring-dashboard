import { Tabs, TabsProps } from 'antd';
import MainLayout from '../components/MainLayout';
function App() {
  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Laboratorio de IoT',
      children: (
        <div className="">
          <h2>Lab IOT</h2>
        </div>
      ),
    },
    {
      key: '2',
      label: 'Laboratorio de Sistemas Eléctricos de Potencia',
      children: 'Lab potencia',
    },
  ];

  return (
    <MainLayout>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </MainLayout>
  );
}

export default App;
