import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { MetarialIcon } from '../../../components/icon/Material';
import { FontAwesomeIcon } from '../../../components/icon/FontAwesome';

const OrderStatusIndicator = ({ status }) => {
    return (
        <View style={styles.container}>
            {
                status === 'packing' || status === 'handling' || status === 'shipping' || status === 'delivered' || status === 'accepted'?
                    <View style={[styles.viewPosition, { width: status === 'accepted' ? 20 : 10, height: status === 'accepted' ? 20 : 10, backgroundColor: 'black' }]}>
                        {
                            status === 'accepted' ? <MetarialIcon name='beenhere' size={13} color='white' /> : <View />
                        }
                    </View> :
                    <View style={styles.viewPosition} />
            }
            <View style={[styles.viewLine, (status === 'handling' || status === 'shipping' || status === 'delivered' || status === 'packing') && { backgroundColor: 'black' }]} />
            {
                status === 'packing' || status === 'handling' || status === 'shipping' || status === 'delivered' ?
                    <View style={[styles.viewPosition, { width: status === 'packing' ? 20 : 10, height: status === 'packing' ? 20 : 10, backgroundColor: 'black' }]}>
                        {
                            status === 'packing' ? <MetarialIcon name='redeem' size={13} color='white' /> : <View />
                        }
                    </View> :
                    <View style={styles.viewPosition} />
            }
            <View style={[styles.viewLine, status === 'handling' || status === 'shipping' || status === 'delivered' ? { backgroundColor: 'black' } : {}]} />
            {
                status === 'handling' || status === 'shipping' || status === 'delivered' ?
                    <View style={[styles.viewPosition, { width: status === 'handling' ? 20 : 10, height: status === 'handling' ? 20 : 10, backgroundColor: 'black' }]}>
                        {
                            status === 'handling' ? <MetarialIcon name='clean-hands' size={13} color='white' /> : <View />
                        }
                    </View> :
                    <View style={styles.viewPosition} />
            }
            <View style={[styles.viewLine, status === 'shipping' || status === 'delivered' ? { backgroundColor: 'black' } : {}]} />
            {
                status === 'shipping' || status === 'delivered' ?
                    <View style={[styles.viewPosition, { width: status === 'shipping' ? 20 : 10, height: status === 'shipping' ? 20 : 10, backgroundColor: 'black' }]}>
                        {
                            status === 'shipping' ? <MetarialIcon name='flight' size={13} color='white' /> : <View />
                        }
                    </View> :
                    <View style={styles.viewPosition} />
            }
            <View style={[styles.viewLine, status === 'delivered' ? { backgroundColor: 'black' } : {}]} />
            {
                status === 'delivered' ?
                    <View style={[styles.viewPosition, { width: status === 'delivered' ? 20 : 10, height: status === 'delivered' ? 20 : 10, backgroundColor: 'black' }]}>
                        {
                            status === 'delivered' ? <FontAwesomeIcon name='money' size={13} color='white' /> : <View />
                        }
                    </View> :
                    <View style={styles.viewPosition} />
            }
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 30
    },
    viewPosition: {
        width: 10,
        height: 10,
        borderRadius: 50,
        backgroundColor: '#f0f0f0',
        justifyContent: 'center', alignItems: 'center'
    },
    viewLine: {
        backgroundColor: '#f0f0f0',
        width: 61,
        height: 3,
        marginLeft: 2, marginRight: 2,
    }
});

export default OrderStatusIndicator