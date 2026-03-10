import React from 'react'
import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;
function Page() {
  return (
    <div>
      <Layout>
      <Header style={{ color: "white" }}>Header</Header>
      <Content style={{ padding: 20 }}>Content</Content>
      <Footer>Footer</Footer>
    </Layout>
    </div>
  )
}

export default Page
