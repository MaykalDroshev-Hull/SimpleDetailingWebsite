import { Card, CardBody, CardHeader, Heading} from "@chakra-ui/react"
import styles from '../styles/InfoCard.module.css'

const InfoCard = (props) => {
  const itemArray = props.itemArray
  
  return (
    <Card maxWidth={props.width} minHeight={props.height} margin={5} variant={"outline"}>
      <CardHeader>
        <Heading>{props.title}</Heading>
      </CardHeader>
      <CardBody>
        <ul className={styles.list}>
          {itemArray?.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </CardBody>
    </Card>
  )
}

export default InfoCard
