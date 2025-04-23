import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

type ChartKey = keyof typeof chartConfig;

const simulatedData = Array.from({ length: 10 }, (_, i) => ({
  name: `T${i + 1}`,
  Voltaje_A: Math.random() * 240,
  Voltaje_B: Math.random() * 240,
  Voltaje_C: Math.random() * 240,
  Corriente_A: Math.random() * 50,
  Corriente_B: Math.random() * 50,
  Corriente_C: Math.random() * 50,
  Energia_A: Math.random() * 10,
  Energia_B: Math.random() * 10,
  Energia_C: Math.random() * 10,
}));

const chartConfig = {
  Voltaje_A: {
    label: 'Voltaje A',
    color: 'var(--chart-1)',
  },
  Voltaje_B: {
    label: 'Voltaje B',
    color: 'var(--chart-2)',
  },
  Voltaje_C: {
    label: 'Voltaje C',
    color: 'var(--chart-3)',
  },
  Corriente_A: {
    label: 'Corriente A',
    color: 'var(--chart-1)',
  },
  Corriente_B: {
    label: 'Corriente B',
    color: 'var(--chart-2)',
  },
  Corriente_C: {
    label: 'Corriente C',
    color: 'var(--chart-3)',
  },
  Energia_A: {
    label: 'Energía A',
    color: 'var(--chart-1)',
  },
  Energia_B: {
    label: 'Energía B',
    color: 'var(--chart-2)',
  },
  Energia_C: {
    label: 'Energía C',
    color: 'var(--chart-3)',
  },
} satisfies ChartConfig;

const renderChart = (keys: ChartKey[], unit: string) => (
  <ChartContainer
    className="min-h-[200px] max-h-[600px] w-full"
    config={chartConfig}
  >
    <LineChart data={simulatedData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis label={{ value: unit, angle: -90, position: 'insideLeft' }} />
      <ChartTooltip content={<ChartTooltipContent />} />
      <Legend />
      {keys.map((key) => (
        <Line
          key={key}
          type="monotone"
          dataKey={key}
          stroke={chartConfig[key].color}
        />
      ))}
    </LineChart>
  </ChartContainer>
);

const PowerCharts = () => {
  return (
    <Tabs defaultValue="voltaje" className="w-full">
      <TabsList>
        <TabsTrigger value="voltaje">Voltaje</TabsTrigger>
        <TabsTrigger value="corriente">Corriente</TabsTrigger>
        <TabsTrigger value="energia">Energía</TabsTrigger>
      </TabsList>
      <TabsContent value="voltaje">
        <Card>
          <CardContent>
            {renderChart(['Voltaje_A', 'Voltaje_B', 'Voltaje_C'], 'Vrms')}
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="corriente">
        <Card>
          <CardContent>
            {renderChart(['Corriente_A', 'Corriente_B', 'Corriente_C'], 'A')}
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="energia">
        <Card>
          <CardContent>
            {renderChart(['Energia_A', 'Energia_B', 'Energia_C'], 'kWh')}
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default PowerCharts;
