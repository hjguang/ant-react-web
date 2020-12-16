import {Form, Input, Button, Select} from 'antd';
import './App.css';

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 2 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

function App() {
  return (
    <Form {...layout}>
      <Form.Item name="note" label="Note"><Input/></Form.Item>
    </Form>
  );
}

export default App;
