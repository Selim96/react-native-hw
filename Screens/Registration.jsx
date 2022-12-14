import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    TouchableOpacity,
    Keyboard
} from 'react-native';

export default function Registration({keyboardHide}) {
    const [login, setLogin] = useState("");
    const [email, setEmale] = useState("");
    const [password, setPassword] = useState("");
    const [isShowKeyboard, setIsShowKeyboard] = useState(false);

    const loginHandler = text => setLogin(text);
    const emailHandler = text => setEmale(text);
    const passwordHandler = text => setPassword(text);

    const handlPress = () => {
        keyboardHide();
        console.log(`${login} + ${email} + ${password}`);
        setLogin("");
        setEmale("");
        setPassword("");
    };

    // const keyboardHide = () => {
    //     setIsShowKeyboard(false);
    //     Keyboard.dismiss();
    // }

    return (
        <View style={styles.mainDiv}>
            <Text style={styles.text}>Регистрация</Text>
            <View style={{...styles.form, marginBottom: isShowKeyboard ? 20 : 43}}>
                <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
                <TextInput
                    value={login}
                    onChangeText={loginHandler}
                    placeholder="Login"
                    style={styles.input}
                    placeholderTextColor='#BDBDBD'
                    onFocus={() => setIsShowKeyboard(true)}
                />
                    <TextInput
                        keyboardType='email-address'
                    value={email}
                    onChangeText={emailHandler}
                    placeholder="Email"
                    style={styles.input}
                    placeholderTextColor='#BDBDBD'
                    onFocus={() => setIsShowKeyboard(true)}
                />
                    <TextInput
                    value={password}
                    onChangeText={passwordHandler}
                    placeholder="Password"
                    style={styles.input}
                    secureTextEntry={true}
                    placeholderTextColor='#BDBDBD'
                    onFocus={() => setIsShowKeyboard(true)}
                />
                </KeyboardAvoidingView>
            </View>
            <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={handlPress}>
                <Text style={styles.btnText}>Зарегистрироваться</Text></TouchableOpacity>
            <Text style={styles.linkToLogin}>Уже есть аккаунт? Войти</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    mainDiv: {
        backgroundColor: '#fff',
        flex: 0.676,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    text: {
        marginTop: 32,
        marginBottom: 33,
        fontWeight: '500',
        fontSize: 30,
        lineHeight: 35,
        textAlign: 'center',
    },
    form: {
        // marginBottom: 32,
    },
    input: {
        color: '#212121',
        height: 50,
        marginBottom: 16,
        backgroundColor: '#F6F6F6',
        marginHorizontal: 16,
        border: 'solid',
        borderColor: '#E8E8E8',
        borderWidth: 1,
        padding: 16,
        borderRadius: 8,
    },
    button: {
        marginTop: 11,
        marginHorizontal: 16,
        marginBottom: 16,
        backgroundColor: '#FF6C00',
        height: 51,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: "center"
    },
    btnText: {
        color: '#fff'
    },
    linkToLogin: {
        fontSize: 16,
        lineHeight: 19,
        color: '#1B4371',
        marginLeft: 'auto',
        marginRight: 'auto'
    }
})