import { Col, Row } from 'react-bootstrap'
import { StoreItem } from '../components/StoreItem'
import storeItems from '../data/items.json'

export function Store() {
  return (
    <>
      <h1>Store</h1>
      {/* 화면 사이즈에 따른 컬럼 사이즈 지정 */}
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map(item => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  )
}