import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { Platform } from 'react-native';

const TopBar = ({title}) => (
    <Appbar.Header>
        <Appbar.Content title={title} subtitle={'Current Trainees'} />
    </Appbar.Header>
);

export default TopBar;