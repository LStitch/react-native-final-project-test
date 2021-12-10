import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Image} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import qsscleanse from '../Images/qsscleanse.png';

export default function Basico() {
    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.titulo}>{"\n"}Champs Easy to Climb{"\n"}</Text>
                    <Image
                            source={qsscleanse}
                            style={styles.wallpapers}
                    />
                <Text style={styles.titulo}>{"\n"}Priority In Lane</Text>
                <Text style={styles.negritas}>{"\n"}Top Lane</Text>
                <Text style={styles.texto}>
                <Text style={styles.negritas}>{"\n"}Champ Select:</Text>
                {"\n"}• Jungle clear speed differential (to track enemy jungler)
                {"\n"}• Toplane push and power lvl 1-2-3-6 (can I get lvls first)
                {"\n"}• Consider early teleport after 4th wave
                <Text style={styles.negritas}>{"\n"}{"\n"}Earlygame:</Text>
                {"\n"}• Lvl 2 first if possible
                {"\n"}• Push and pressure mentality
                {"\n"}• Track enemy jungler (where did he start)
                {"\n"}• Don’t contest lane when at disadvantage in lvl / minions / Items, wait for equilibrium or advantage! 
                (e.g. you’ve lost a trade and he is pushing, let him push in and farm under tower instead of contesting in the lane)
                {"\n"}• Pink Pink Pink
                {"\n"}• Reduce dead time, always be time efficient
                {"\n"}• Look for teleports and roams to Mid/Bot post 6 if possible
                {"\n"}• 30s before Teleport comes back, check map for available TP wards
                <Text style={styles.negritas}>{"\n"}{"\n"}Midgame:</Text>
                {"\n"}• Time efficiency 
                {"\n"} • Post 20m Look for homeguard TPs from base for flanks or engades (keep a lookout for good TP wards)
                {"\n"}• Splitpush / catch sidewaves when you have TP up, otherwise stick with team! Pressure botlane to create baron pressure on the enemy team, then look for flank TPs
                {"\n"}• Identify your job in teamfights (who is your target, who are you protecting etc)
                ( Pre-planning and pre-think )
                </Text>
                <Text style={styles.negritas}>{"\n"}{"\n"}Jungle</Text>
                <Text style={styles.texto}>
                <Text style={styles.negritas}>{"\n"}{"\n"}Champ Select:</Text>
                {"\n"}• Consider which side you want to pressure (Bot or top)
                {"\n"}• Which lanes are easier but also most important to gank
                {"\n"}• Who has faster jungler clear of you and enemy jungler?
                {"\n"}• Can you do early dragons?
                <Text style={styles.negritas}>{"\n"}{"\n"}Earlygame:</Text> 
                {"\n"}• Check if enemy botlane leashed (can track jungler early)
                {"\n"}• Do you win 1v1 vs enemy jungler lvl 2-3-4-5-6
                {"\n"}• Track enemy jungler based on start location and vision control
                {"\n"}• Chose side to pressure and place pinks / vision toward this side
                {"\n"}• Be effective with your time, get good back timings, DON'T WASTE TIME
                {"\n"}• Play around the pressure you create, adapt to the situation of the game, (example Pressure top pre 6, pressure bot post 6) ~
                {"\n"}• PINKS PINKS PINKS
                {"\n"}• Target prioritization, Who should I use summoners / ulti for
                {"\n"}Clear  - pressure - Vision

                <Text style={styles.negritas}>{"\n"}{"\n"}Midgame:</Text> 
                {"\n"}• Always be time efficient
                {"\n"}• What is your job in teamfight and how do you want to play the teamfight? (Are you engage? should you peel? who is your target etc)
                {"\n"}• Keep buying pinks and keep manipulation pressure to gain deeper vision
                {"\n"}• Keep tab on your team ALWAYS to secure being at the right place at the right time!
                </Text>
                <Text style={styles.negritas}>{"\n"}{"\n"}Mid Lane</Text>
                <Text style={styles.texto}>
                <Text style={styles.negritas}>{"\n"}{"\n"}Champ Select:</Text>
                {"\n"}• Jungle clear speed differential
                {"\n"}• Push and power lvl 1-2-3-6
                {"\n"}• Pre-plan and Pre-think
                {"\n"}• 4th wave TP?

                <Text style={styles.negritas}>{"\n"}{"\n"}Earlygame:</Text> 
                {"\n"}• Track enemy jungler based on start location and vision control
                {"\n"}• Chose side to pressure and place pink/trinket toward this side
                {"\n"}• Create pressure through leaning towards said side and checking the lane your leaning to, if possible go gank
                {"\n"}• Be effective with your time, get good back timings, DON'T WASTE TIME
                {"\n"}• Don’t contest lane when at disadvantage in lvl / minions / Items, wait for equilibrium or advantage! (e.g. you’ve lost a trade and he is pushing, let him push in and farm under tower instead of contesting in the lane)
                {"\n"}• Play around the pressure you create, adapt to the situation of the game, (Pressure top pre 6, pressure bot post 6) ~
                {"\n"}• PINKS PINKS PINKS
                {"\n"}• Target prioritization, Who should I use summoners / ulti for
                {"\n"}Push and pressure side Mentality
                {"\n"}Push fast = many minions alive = more time
                {"\n"}• If you can, always pressure
                {"\n"}• When you have pushed enemy mid to tower, look for roam botlane!
                {"\n"}• Push minions to tower aggro
                {"\n"}Always be efficient with our time
                {"\n"}Do everything as fast as possible - Push - roam - Back - push etc
                {"\n"}Push enemy to tower - gank bot/top lane - INSTANT go back mid catch minions

                <Text style={styles.negritas}>{"\n"}{"\n"}Midgame:</Text>
                {"\n"}• Controlling midlane - Controlling game through vision and pressure
                {"\n"}• Catch sides if needed, don't share exp when you don't need to
                {"\n"}• Keep buying pinks and keep manipulation pressure to gain deeper vision
                {"\n"}• Keep tab on your team ALWAYS to secure being at the right place at the right time!
                {"\n"}• If enemy mid pressure one side, either follow or counter pressure other side
                {"\n"}• If you don't want to stay in the fight and you think it's bad, STOP THE FIGHT!
                {"\n"}• Always try to be effective with your time; Always farm something or pressure side
                {"\n"}• When you get the push, use it! Either transfer pressure to sides or get a good base or take jungle camp 
                {"\n"}• Identify your job in teamfights (who is your target, who are you protecting)
                </Text>
                <Text style={styles.negritas}>{"\n"}{"\n"}Bot Lane</Text>
                <Text style={styles.texto}>
                <Text style={styles.negritas}>{"\n"}{"\n"}Champ Select:</Text> 
                {"\n"}• Jungle clear speed differential
                {"\n"}• Botlane push and power lvl 1-2-3-6
                {"\n"}• Pre-plan and Pre-think

                <Text style={styles.negritas}>{"\n"}{"\n"}Early game:</Text>
                {"\n"}• Can I get lvl 2 first ? (Push / Pressure)
                {"\n"}• Consider giving lesser leash to secure early level 2
                {"\n"}• Track Jungler through your jungler!
                {"\n"}• Before pushing up, know whether you are at risk from jungler, if at risk, ward first
                {"\n"}• Don’t contest lane when at disadvantage in lvl / minions / Items, wait for equilibrium or advantage! (e.g. you’ve lost a trade and he is pushing, let him push in and farm under tower instead of contesting in the lane)
                {"\n"}• Reduce dead time
                {"\n"}• Always think Time efficiency
                {"\n"}• Target prioritization, Who should I use summoners / ulti for
                {"\n"}• If you can, always pressure

                <Text style={styles.negritas}>{"\n"}{"\n"}Midgame:</Text>
                {"\n"}• Always be time efficient
                {"\n"}• What is your job in teamfight and how do you want to play the teamfight? (Who is a threat to you, who will go on you, what do you need to flash etc etc etc)
                {"\n"}• Controlling midlane - Controlling game through vision and pressure
                {"\n"}• Catch sides if needed, don't share exp when you don't need to
                </Text>
                <Text style={styles.negritas}>{"\n"}{"\n"}Support</Text>
                <Text style={styles.texto}>
                <Text style={styles.negritas}>{"\n"}{"\n"}Champ Select:</Text>
                {"\n"}• Jungle clear speed differential
                {"\n"}• Botlane push and power lvl 1-2-3-6
                {"\n"}• Pre-plan and Pre-think
                <Text style={styles.negritas}>{"\n"}{"\n"}Early game:</Text>
                {"\n"}• Can we get lvl 2 first ? (Push / Pressure)
                {"\n"}• Consider giving lesser leash to secure early level 2
                {"\n"}• Track Jungler through your jungler!
                {"\n"}• Before pushing up, know whether you are at risk from jungler, if at risk, ward first
                {"\n"}• Don’t contest lane when at disadvantage in lvl / minions / Items, wait for equilibrium or advantage! (e.g. you’ve lost a trade and he is pushing, let him push in and farm under tower instead of contesting in the lane)
                {"\n"}• Reduce dead time
                {"\n"}• Always think Time efficiency
                {"\n"}• PINKS PINKS PINKS
                <Text style={styles.negritas}>{"\n"}{"\n"}Midgame:</Text>
                {"\n"}• Always be time efficient
                {"\n"}• Where do you want vision control?
                {"\n"}• What is your job in teamfight and how do you want to play the teamfight? (Are you engade? should you peel? who is your target etc, who do you protect etc etc )
                {"\n"}• Objective control with jungler
                {"\n"}-------------------------------------
                {"\n"}Reduce the bleed (When you start losing, minimize the dmg enemy team can do)
                {"\n"}• Focus on getting farm and exp
                {"\n"}• Get defensive vision
                {"\n"}• Never put yourself in a position to die
                {"\n"}• Play to follow up on your team instead of making plays yourself
                {"\n"}• Believe that you can win the game regardless of your score
                {"\n"}• Don't give up the game untill the nexus explodes, you can still learn something and you can still improve every game, even if loss.
                {"\n"}• We want to get the most of the situation REGARDLESS of what situation you are in
                {"\n"}• Stay happy, stay focused, Don't die stupidly, farm up, follow up on fights, SCALE back into the game. You can still win.
                {"\n"}Don't fucking give up
                {"\n"}Ward on the side the jungler is, which is opposite of where he starts.
                {"\n"}When you fall behind
                {"\n"}Play SAFE
                {"\n"}play SMART
                {"\n"}play for mid/lategame
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
        width: 350,
        height: 350,
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