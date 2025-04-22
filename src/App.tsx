import { Tabs, TabsProps } from 'antd';
import MainLayout from '../components/MainLayout';
// import { ChartConfig } from './components/ui/chart';
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/ui/chart';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

function App() {
  const onChange = (key: string) => {
    console.log(key);
  };

  const chartData = [
    { month: 'January', desktop: 186, mobile: 80 },
    { month: 'February', desktop: 305, mobile: 200 },
    { month: 'March', desktop: 237, mobile: 120 },
    { month: 'April', desktop: 73, mobile: 190 },
    { month: 'May', desktop: 209, mobile: 130 },
    { month: 'June', desktop: 214, mobile: 140 },
  ];

  const chartConfig = {
    desktop: {
      label: 'Desktop',
      color: '#2563eb',
      // icon: Monitor,
    },
    mobile: {
      label: 'Mobile',
      color: '#60a5fa',
      // icon: Phone,
    },
  } satisfies ChartConfig;

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Laboratorio de IoT',
      children: (
        <ChartContainer config={chartConfig} className="min-h-[200px] w-[40%]">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey={'month'}
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip content={<ChartTooltipContent indicator="line" />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey={'desktop'} fill="green" radius={4} />
            <Bar dataKey={'mobile'} fill="blue" radius={4} />
          </BarChart>
        </ChartContainer>
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
