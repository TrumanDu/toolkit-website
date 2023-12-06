import { Col, Flex, Row, Typography } from 'antd';
import storeImg from '../public/image/app-store.png';
import dashboardImg from '../public/image/screen-dashboard.png';
import mainImg from '../public/image/screen-main.png';
const { Title, Paragraph, Text } = Typography;
const style = {
  context: {
    marginTop: 20,
    minHeight: '764px',
  },
  fontStyle: {
    fontSize: '16px',
    lineHeight: 1.475,
  },
};
function Home() {
  return (
    <>
      <div style={style.context}>
        <Row>
          <Col span={12}>
            <Flex justify={'center'} align={'center'} vertical={true}>
              <Title level={3}>搜索模式</Title>
              <Paragraph style={style.fontStyle}>
                快捷键<Text code>Control+Alt+A</Text>
                ,可以快速调出搜索框，搜索支持模糊查找。
              </Paragraph>
              <Paragraph style={style.fontStyle}>
                输入
                <Text code>:all</Text>可以查询所有的已安装插件，
                支持Tab快速选择。
              </Paragraph>
            </Flex>
          </Col>
          <Col span={12}>
            <img src={mainImg} width="100%" alt="img" />
          </Col>
        </Row>
      </div>
      <div style={style.context}>
        <Row>
          <Col span={12}>
            <img src={dashboardImg} width="100%" alt="img" />
          </Col>
          <Col span={12}>
            <Flex justify={'center'} align={'center'} vertical={true}>
              <Title level={3}>软件主界面</Title>
              <Paragraph style={style.fontStyle}>
                <Text code>点击托盘</Text>可以显示和隐藏该界面。
              </Paragraph>
              <Paragraph style={style.fontStyle}>
              快捷键<Text code>Control+Alt+O</Text>可以呼出主界面，
              </Paragraph>
              <Paragraph style={style.fontStyle}>
                在主界面内可以查看已经安装的插件，点击插件即可使用，用完即走。
              </Paragraph>
              <Paragraph style={style.fontStyle}>
                在该页面可以对插件卸载，鼠标滑动到图片即可看到删除按钮。
              </Paragraph>
            </Flex>
          </Col>
        </Row>
      </div>
      <div style={style.context}>
        <Row>
          <Col span={12}>
            {' '}
            <Flex justify={'center'} align={'center'} vertical={true}>
              <Title level={3}>App市场</Title>

              <Paragraph style={style.fontStyle}>
                在该界面可以查看已经发布的插件，可以安装与升级相应的插件。
              </Paragraph>
              <Paragraph style={style.fontStyle}>
                能够看到下载图标的按钮，即代表可以安装或升级，操作失败，可以重试。
              </Paragraph>
            </Flex>
          </Col>
          <Col span={12}>
            <img src={storeImg} width="100%" alt="img" />
          </Col>
        </Row>
      </div>
    </>
  );
}
export default Home;
