import { View, Text } from 'react-native'

import styles from './styles'
import Title from '../../components/Title'
import { Image } from "react-native";
import MyButton from '../../components/MyButton'
import { ScrollView } from 'react-native';

export default function Apresentacao() {
  return (
    <ScrollView>
    <View style={styles.container}>
     <Title title={"Marcelo Gabriel Corrêa Lima"}/>
     <View style={styles.divImagem}>
     <Image source={require('../../../assets/Marcelo.png')} style={styles.imagemMarcelo}/>
     <Text style={styles.textoApresentacao}>Meu nome é Marcelo Gabriel Correa Lima, tenho 18 anos e desde muito cedo, sempre fui apaixonado por tecnologia. Essa curiosidade começou ainda na infância, quando me interessei por computadores e comecei a explorar suas funcionalidades. Foi natural para mim que, ao crescer, eu quisesse aprender mais sobre como a tecnologia pode transformar o mundo e resolver problemas do dia a dia. Isso me motivou a ingressar no curso de Desenvolvimento de Sistemas no SENAI, onde pude aprender não só a programar, mas também a trabalhar de forma estratégica e criativa para desenvolver soluções inovadoras.

Ao longo da minha trajetória acadêmica, me dediquei intensamente para entender os conceitos mais complexos da área de TI e aplicá-los na prática. O ambiente do SENAI foi fundamental para meu crescimento, pois além de me ensinar as habilidades técnicas, também me proporcionou uma visão clara da importância do trabalho em equipe, da comunicação eficaz e da resolução de problemas de forma colaborativa.

Sou uma pessoa focada e persistente, que acredita que o sucesso não vem apenas do conhecimento, mas também da capacidade de superar desafios e da determinação em melhorar a cada dia. Acredito que a programação vai muito além de escrever código; é uma ferramenta poderosa para criar soluções que realmente fazem a diferença na vida das pessoas.

Agora, com a conclusão do curso de Desenvolvimento de Sistemas se aproximando, estou empolgado para colocar em prática tudo o que aprendi e começar minha carreira no mercado de tecnologia. Tenho grande interesse em trabalhar com desenvolvimento de software, com o objetivo de criar soluções inovadoras que possam ajudar a melhorar a vida das pessoas. Estou pronto para novos desafios e ansioso para crescer como profissional e contribuir para a evolução da tecnologia.</Text>
     </View>
     <MyButton screen={'Filme01'} name={'Até o ultimo homem'}/>
     <MyButton screen={'Filme02'} name={'Velozes e furiosos'}/>
    </View>
    </ScrollView>
  )
}