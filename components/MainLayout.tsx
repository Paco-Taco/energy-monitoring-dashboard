import React from 'react';
import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header
        style={{
          fontSize: '1.5rem',
          backgroundColor: '#fff',
          color: '#101828',
        }}
        className="font-poppins font-semibold border border-gray-300"
      >
        Monitor de Energía
      </Header>

      <Content style={{ padding: '24px', background: 'white' }}>
        {children}
      </Content>

      <Footer style={{ textAlign: 'center' }}>
        ©2025 Universidad De Colima. Todos los derechos reservados.
      </Footer>
    </Layout>
  );
};

export default MainLayout;
