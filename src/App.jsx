import React from 'react';
import { Layout, Menu, Card, Row, Col, Table, Avatar, Typography } from 'antd';
import {
  HomeOutlined,
  DollarOutlined,
  HistoryOutlined,
  WalletOutlined,
  CustomerServiceOutlined,
  MessageOutlined
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import bankLogo from './assets/bank.png';
import balanceIcon from './assets/balance.png';
import gradient from './assets/gradient.jpg';
import cards from './assets/cards.jpg';

const { Header, Sider, Content } = Layout;
const { Title, Text } = Typography;

const Dashboard = () => {
  const navigate = useNavigate();

  const menuItems = [
    { key: 'home', icon: <HomeOutlined />, label: 'Home', onClick: () => navigate('/') },
    { key: 'transfer', icon: <DollarOutlined />, label: 'Payment Transfer', onClick: () => navigate('/fund') },
    { key: 'history', icon: <HistoryOutlined />, label: 'Transaction History', onClick: () => navigate('/history') },
    { key: 'wallet', icon: <WalletOutlined />, label: 'Wallet Transaction', onClick: () => navigate('/wallet') },
    { key: 'customer', icon: <CustomerServiceOutlined />, label: 'Customer Services', onClick: () => navigate('/customer') },
    { key: 'feedback', icon: <MessageOutlined />, label: 'Feedback', onClick: () => navigate('/feedback') },
  ];

  const transactionData = [
    { key: 1, transaction: 'Uber 0312', amount: '$5.90', status: 'Success', date: 'Wed, Apr 24 2:30 pm', channel: 'Online', category: 'Travel' },
    { key: 2, transaction: 'United Airlines', amount: '$-300.00', status: 'Failed', date: 'Mon, May 10 10:00 am', channel: 'Online', category: 'Travel' },
    { key: 3, transaction: 'McDonalds', amount: '$50.00', status: 'Success', date: 'Sun, Jan 12 10:30 pm', channel: 'Online', category: 'Food' },
    { key: 4, transaction: 'Medicine', amount: '$120.00', status: 'Success', date: 'Tue, Feb 20 11:00 am', channel: 'Online', category: 'Medicine' },
    { key: 5, transaction: 'McDonalds', amount: '$180.00', status: 'Success', date: 'Mon, Jun 10 10:00 am', channel: 'Online', category: 'Food' },
  ];

  const columns = [
    { title: 'Transaction', dataIndex: 'transaction' },
    { title: 'Amount', dataIndex: 'amount', render: (text) => <Text style={{ color: text.includes('-') ? 'red' : 'green', fontWeight: 600 }}>{text}</Text> },
    { title: 'Status', dataIndex: 'status', render: (status) => (
      <span style={{
        color: status === 'Success' ? 'green' : 'red',
        backgroundColor: status === 'Success' ? '#d8edbb' : '#e38c8a',
        padding: '4px 12px',
        borderRadius: '20px'
      }}>{status}</span>
    )},
    { title: 'Date', dataIndex: 'date' },
    { title: 'Channel', dataIndex: 'channel' },
    { title: 'Category', dataIndex: 'category', render: (text) => <Text strong style={{ color: '#2b16f0' }}>{text}</Text> },
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* Sidebar */}
      <Sider breakpoint="lg" collapsedWidth="0" style={{ backgroundColor: '#fff', boxShadow: '2px 0 8px #f0f1f2' }}>
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <img src={bankLogo} alt="Bank Logo" style={{ height: 50 }} />
          <Title level={4} style={{ margin: 10 }}>ZEO BANK</Title>
        </div>
        <Menu mode="inline" items={menuItems} style={{ fontSize: 16 }} />
      </Sider>

      <Layout>
        <Header style={{ background: '#fff', padding: '0 20px' }}>
          <Title level={3} style={{ margin: 0 }}>Dashboard</Title>
        </Header>
        <Content style={{ margin: '20px' }}>
          <Row gutter={[16, 16]}>
            {/* Balance Card */}
            <Col xs={24} sm={12} lg={12}>
              <Card style={{ borderRadius: 12 }}>
                <Row align="middle">
                  <Col span={6}>
                    <img src={balanceIcon} alt="Balance" style={{ height: 80 }} />
                  </Col>
                  <Col span={18}>
                    <Title level={4}>Balance</Title>
                    <Text>Current Balance</Text>
                    <br />
                    <Title level={5}>$2000</Title>
                  </Col>
                </Row>
              </Card>
            </Col>

            {/* Profile Card */}
            <Col xs={24} sm={12} lg={12}>
              <Card
                cover={<img src={gradient} alt="Profile Cover" style={{ height: 120, objectFit: 'cover' }} />}
                style={{ borderRadius: 12 }}
              >
                <Avatar size={64} style={{ backgroundColor: 'grey', position: 'absolute', top: 80, left: 30 }}>S</Avatar>
                <Title level={4} style={{ marginTop: 40 }}>ZEO</Title>
                <Text>ZEO@gmail.com</Text>
              </Card>
            </Col>
          </Row>

          <Row gutter={[16, 16]} style={{ marginTop: 20 }}>
            {/* Transaction Table */}
            <Col xs={24} lg={16}>
              <Card style={{ borderRadius: 12 }}>
                <Title level={4}>Recent Transactions</Title>
                <Table
                  dataSource={transactionData}
                  columns={columns}
                  pagination={{ pageSize: 4 }}
                  scroll={{ x: 500 }}
                />
              </Card>
            </Col>

            {/* My Accounts */}
            <Col xs={24} lg={8}>
              <Card style={{ borderRadius: 12, textAlign: 'center' }}>
                <Title level={4}>My Accounts</Title>
                <img src={cards} alt="Cards" style={{ width: '100%', borderRadius: 12 }} />
              </Card>
              <Card style={{ marginTop: 20, borderRadius: 12 }}>
                <Title level={5}>Credit Cards Expiry</Title>
                <Table
                  dataSource={[
                    { key: 1, account: 'Account 1', expiry: '26 Dec 2024' },
                    { key: 2, account: 'Account 2', expiry: '6 Mar 2025' },
                  ]}
                  columns={[
                    { title: 'Account', dataIndex: 'account' },
                    { title: 'Expiry Duration', dataIndex: 'expiry' }
                  ]}
                  pagination={false}
                  size="small"
                />
              </Card>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
