import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, SafeAreaView } from 'react-native';
import { Button, Card, Icon, Text } from '@ui-kitten/components';

const HomePageLessonCard = ({lesson_name}) => {
    return(<View>
        <Text appearance="h6">{lesson_name}</Text>
    </View>)
}

export default HomePageLessonCard