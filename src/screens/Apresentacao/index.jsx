import { View, Text } from 'react-native'

import styles from './styles'
import Title from '../../components/Title'
import MyButton from '../../components/MyButton'

export default function Apresentacao() {
  return (
    <View style={styles.container}>
     <Title title={"Apresentação"}/>

     <View style={styles.apresentacao1}>
     <Title title={"Marcelo"}/>
     <Text>Marcelo é um jovem vibrante que adora aproveitar a vida ao máximo. Ele começa seus dias jogando futebol com amigos, solta pipas quando o vento está favorável, e passa as tardes pescando em um lago tranquilo. À noite, ele se diverte em festas, dançando e socializando. Para Marcelo, cada momento é uma oportunidade de se alegrar e viver intensamente.</Text>

     <Title title={"Gabriel"}/>
     <Text>Gabriel é uma pessoa tranquila e reservada que encontra prazer em estudar e ler. Ele passa grande parte do tempo mergulhado em livros e pesquisas, buscando conhecer mais sobre o mundo e expandir seus conhecimentos. Para ele, a leitura e o estudo são as formas ideais de enriquecer a mente e aproveitar a vida de maneira significativa.</Text>
     </View>

     <MyButton screen={'Filme01'} name={'Até o ultimo homem'}/>
     <MyButton screen={'Filme02'} name={'Velozes e furiosos'}/>
    </View>
  )
}