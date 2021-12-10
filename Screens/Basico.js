import React, {useCallback} from 'react'
import { StyleSheet, Text, View, Button, Alert, Linking } from 'react-native'
import {Image} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import Summoners from '../Images/summoners.png';

export default function Basico() {
    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.titulo}>{"\n"}Enfriamiento de Summoners</Text>
                <Image
                        source={Summoners}
                        style={styles.wallpapers}
                />
                <Text style={styles.titulo}>{"\n"}Teoría de Líneas{"\n"}</Text>
                <Text style={styles.texto}>La intención de este apartado es fortalecer las competencias en línea. 
                    Como concepto general, el nivel en línea es mucho mayor al de las siguientes fases, 
                    debido a que es la fase con mayor juego y la primera en producirse, cuando el jugador está más “fresco”.
                </Text>
                <Text style={styles.texto}>Es importante focalizar en las competencias que se extraen “hacia afuera” o para la posterioridad 
                    de esta fase, así como las malas manías o errores que se generan en línea. La fase de líneas debe ser vista como un 
                    instrumento o herramienta para el verdadero choque final.{"\n"}
                </Text>
                <Text style={styles.texto}>
                La estructura de esta sección será dividida en varias partes, las cuales considero Las Bases de la Línea. Con estos
                tres conceptos claramente explicados, conseguiremos mejorar notoriamente, sobretodo en nuestra capacidad de concebir 
                la línea. Veremos desde arriba el porqué de todas nuestras acciones y entenderemos el cauce determinado que el Metagame 
                adopta.{"\n"}
                </Text>
                <Text style={styles.titulo}>
                    Farmeo
                </Text>
                <Text style={styles.texto}>
                {"\n"}Si nos referimos brevemente a la línea, quizás la primera idea que se les asome a muchos sea la de Farmear. Para muchos 
                incluso, es lo único esencial e importante de la fase de líneas.
                <Text style={styles.negritas}>{"\n"}{"\n"}“No morir y Farmear”.{"\n"}</Text>
                {"\n"}Cuántas veces habremos oído esa verdad. Y es cierto, no hay nada malo en esa frase. El problema llega cuando el jugador
                se obceca en solo cumplir eso. Hace Tunnel Vision entorno a esa idea, y todo lo que ocurre en el mapa, en la partida, se 
                vuelve ajeno a él. Cuantas hemos vivido:
                <Text style={styles.negritas}>{"\n"}{"\n"}“Conseguir 100 Creeps más que el contrario y echar a perder la partida”.{"\n"}{"\n"}</Text>
                El Modus Operandi de muchos individuos, otra vez mal guiados por entornos superiores o ajenos a ellos, como la diabólica 
                LCS, que tanto daño puede llegar a hacer, se centra primaria y a veces únicamente, en Farmear. El hecho de cumplir esto a 
                rajatabla, no se capitaliza en un beneficio directo e ineludible, sino en una limitación propia del juego, privándose uno 
                a sí mismo de libertad, y enunciando un comando inviable en plenitud de casos. Que ninguno se alarme aquí. El Farm es 
                necesario. El Farm es una herramienta. Pero nadie nunca ha ganado por Farmear un número exacto de Minions en el menor 
                tiempo posible.
                <Text style={styles.negritas}>{"\n"}{"\n"}“El Farmeo nunca es lo más importante”{"\n"}</Text>
                {"\n"}Aunque muchos, de primeras, consideren esto una vil y despiadada falacia, más propia de un rey corrupto que de un guía, 
                no se alteren, vamos a aclararlo.
                </Text>
                <Text style={styles.titulo}>
                    Wardeo{"\n"}
                </Text>
                <Text style={styles.texto}>
                Dependiente siempre del Meta y la Season, el Wardeo es uno de los factores más determinantes de la línea. Y no hace 
                falta señalar su importancia en las Etapas de Transición y en la Toma de Objetivos. Un error muy común es caer en los 
                Ganks, porque no tenemos visión. O incluso, porque erramos al no ver, y a la vez, porque estamos situados en una posición 
                peligrosa (Más tarde se explicará sobre esto en la sección 3. Tradeo). A dicha posición la llamaremos, más tarde, 
                Posición Inviable. El morir en un Gank es algo importante. No solo el enemigo de línea se beneficia, sino que el Jungler 
                enemigo se refuerza también, y ahora será capaz de transmitir la ventaja al resto de líneas.
                <Text style={styles.negritas}>{"\n"}{"\n"}“Morir en un Gank en Early es como entregar la primera ala de Dragón” </Text>
                </Text>
            </ScrollView>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',

    },

    wallpapers: {
        width: 200,
        height: 200,
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
  