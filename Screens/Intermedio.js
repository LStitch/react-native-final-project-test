import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import {Image} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Champs from '../Images/Champs.png';

const Intermedio = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.titulo}>{"\n"}Champs Easy to Climb</Text>
                <Image
                        source={Champs}
                        style={styles.wallpapers}
                />
                <Text style={styles.titulo}>
                    Tips Anti Tilteo Intenso{"\n"}
                </Text>
                <Text style={styles.texto}>
                1º No juegues ranked durante un par de días ( semanas o meses, depende de tu estado de estrés ).{"\n"}
                </Text>
                <Text style={styles.texto}>
                2º Busca divertirte con amigos, aunque tu seas chullenger koreano y tus amigos hierro 4 en NA, juega con ellos, 
                suelen ser muy emocionantes las partidas.{"\n"}
                </Text>
                <Text style={styles.texto}>
                3º Practica campeones DEL META para estar preparado. Es decir, si eres main mid, obviamente, los picks de ahora 
                suelen ser Vex, Lux, Yone, etc... No te agarres Jhin en ranked first time en la promo de otro contra un Zed 
                (experiencia personal :/). Simplemente hazte una lista de campeones a jugar por cada linea, póntela delante de 
                la pantalla and chill.
                </Text>
                <Text style={styles.texto}>
                4º Si incluso jugando estando bien mentalmente no te ayuda, la solución es simple, en la esquina superior derecha, 
                hay una X, click y aceptar salir del juego. Es lo mejor que puedes hacer en ese momento, cerrar y jugar un poco a 
                otra cosa, como si juegas a OSU, minecraft, etc, juega otra cosa para dejar de ser un men tilteado, porque cuando 
                estamos tilted, solemos parecernos al niño que pegaba a los demás en la escuela.
                </Text>
                <Text style={styles.texto}>
                5º Sigues sin salir del estado Tilted? Sal por ahí. Muchos (me incluyo) no tenemos una vida social plenamente activa, 
                pero incluso yo salgo de vez en cuando, voy al cine, quedo con algún amigo o simplemente salgo a dar un paseo. La cosa 
                es volver a sentirse bien con uno mismo y no dejar que el juego sea una fuente de estrés gratuita.{"\n"}
                </Text>
                <Text style={styles.texto}>
                6º Deja de copiarles a los profesionales, tu no eres uno de ellos, si faker juega full ap Alistar mid con mejais 
                TU NO LO HAGAS, NO ERES FAKER. Si solo intentas copiarlos nunca mejorarás , y te frustrarás más y aun más rápido. 
                Los profesionales son una guía para nosotros, no una imagen a seguir ciegamente.{"\n"}
                </Text>
                <Text style={styles.texto}>
                7º En el caso de que seas un testarudo y sigas jugando ranked sabiendo que estás tilted te recomiendo escoger siempre 
                campeones del meta y que sepas jugar, no hagas experimentos, te saldrán mal. Y por encima de todo, o esconder el chat 
                o simplemente ser constructivo, intentar hacer autocrítica y no enfocarte en flamear al que va 0-8 en mid contra una 
                Leblanc o cosas del estilo.{"\n"}
                </Text>
                <Text style={styles.titulo}>
                Que debo hacer para sacar una S+ con todos los campeones
                </Text>
                <Text style={styles.negritas}>
                {"\n"}Puntos de visión
                </Text>
                <Text style={styles.texto}>
                - Que tanto duro el ward{"\n"}
                - Que tan cerca se coloco a la base enemiga{"\n"}
                - A cuantos enemigos detecto o cuantos objetivos detecto{"\n"}
                - Destruir wards enemigos{"\n"}
                </Text>
                <Text style={styles.negritas}>
                Puntos de combate
                </Text>
                <Text style={styles.texto}>
                - Participación en Kills{"\n"}
                - KDA (Kill/Death/Assist){"\n"}
                - Daño inflingido{"\n"}
                - Mantener bajas tus muertes{"\n"}
                </Text>
                <Text style={styles.negritas}>
                Puntos de oro
                </Text>
                <Text style={styles.texto}>
                - Cuanto oro por minuto consigues{"\n"}
                - Cuantos minions farmeaste{"\n"}
                - Cuantos campeones asesinaste{"\n"}
                - Objetivos hechos{"\n"}
                </Text>
                
            </ScrollView>
        </View>
    )
}

export default Intermedio

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',

    },

    wallpapers: {
        width: 300,
        height: 300,
        margin: 15,
        alignSelf: 'center'
    },

    texto: {
        fontSize: 18,
        textAlign: 'justify',
        color:'white',
    },

    negritas: {
        fontSize: 18,
        textAlign: 'justify',
        fontWeight: 'bold',
        color:'white',
    },
    
    titulo: {
        fontSize: 25,
        textAlign: 'center',
        color:'white',
    }
});
  
  
