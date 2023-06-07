import { StyleSheet, 
    Text, 
    View, 
    SafeAreaView, 
    Image,
    Dimensions,
    StatusBar,
    FlatList,
    TouchableOpacity
    
 } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';



const {width, height} = Dimensions.get('screen');

const COLORS = {primary:'#3b8132', white:'#fff', green:'#4EA837'};

const slides =[
    {
        id:'1',
        image: require('../images/image1.png'),
        title:'Select your favourite food',
        subtitle:'Choose your favourite food and restaurant near you',
    },
    {
        id:'2',
        image: require('../images/image2.png'),
        title:'Real Time Tracking',
        subtitle:'Get an accurate tracking of your items in real time',
    },
    {
        id:'3',
        image: require('../images/image3.png'),
        title:'Make your Reservation',
        subtitle:'Reservation for moments you cherish just got easier',
    },
]

const Pictures = ({item}) => {
    return (
        <View style={{alignItems: 'center'}}>
                <Image source={item.image} 
                style={{height:'65%', width, resizeMode:'contain'}}
            />
       
            <Text style={styles.title}>{item.title} </Text>
            <Text style={styles.subtitle}> {item.subtitle}  </Text>
   
        </View>
    )
}
const OnboardingScreen = () => {
    const navigation = useNavigation();
    const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
    const ref = React.useRef(null);
    const Footer = () => {
        return(
            <View style={{
                height:height*0.25,
                justifyContent:"space-between",
                paddingHorizontal:20
            }}>
                <View style={{
                    flexDirection:'row',
                    justifyContent:'center',
                    marginTop:20
                }}>
                   {slides.map((_, index) => (
                     <View
                      key ={index} 
                      style={[styles.indicator,
                        currentSlideIndex == index && {
                            backgroundColor:'#4EA837',
                          },
                        ]}/>
                   ))}                   
                </View>
                <View style={{marginBottom:20}}>
                    {
                        currentSlideIndex == slides.length -1 ? 
                        ( <View style={{height:50}}>
                        <TouchableOpacity 
                          style={[styles.btnLast]}
                          onPress={()=> navigation.navigate('SignUpScreen')}
                              >
                                <Text style={{
                                    fontWeight:"bold", 
                                    fontSize:15, 
                                    color:COLORS.white}}>Get Started</Text>
                            </TouchableOpacity>
                        </View> 
                        ): 
                        (
                            <View style={{marginBottom:20}}>
                            <View><TouchableOpacity style={[styles.btn]} onPress={goNextSlide}>
                                <Text style={{
                                    fontWeight:"bold", 
                                    fontSize:15, 
                                    color:COLORS.white}}>Next </Text>
                            </TouchableOpacity>
                            </View>
                          
                            <View>
                            <TouchableOpacity 
                                onPress = {skip}
                                style={[styles.btnSkip]}>
                                <Text style={{
                                    fontWeight:"bold", 
                                    fontSize:15, 
                                    color:COLORS.green}} >Skip </Text>
                            </TouchableOpacity>
                            </View>
                            </View>
                        )
                    }
                   
                  
                    </View>
            </View>
        );
    };
    const updateCurrentSlide = (e) =>{
        const contentOffsetx = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetx / width);
        setCurrentSlideIndex(currentIndex);
    };
    const goNextSlide = () => {
        const nextSlideIndex = currentSlideIndex + 1;
        if (nextSlideIndex != slides.length){
            const offset = nextSlideIndex * width;
            ref?.current?.scrollToOffset({offset});
            setCurrentSlideIndex(nextSlideIndex); 
        }
       
    };

    const skip = () => {
        const lastSlideIndex = slides.length - 1;
        const offset = lastSlideIndex * width;
        ref?.current?.scrollToOffset({offset});
        setCurrentSlideIndex(lastSlideIndex); 
    }
  return (
    <SafeAreaView style={{flex:1, backgroundColor: COLORS.white}}>
        <StatusBar backgroundColor={COLORS.white}/>
        <FlatList
          ref={ref}
          onMomentumScrollEnd={updateCurrentSlide}
          pagingEnabled
          data={slides}
          contentContainerStyle={{height:height * 0.95}}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => <Pictures item={item}/>}
        />
        <Footer/>

    </SafeAreaView>
  )
}

export default OnboardingScreen

const styles = StyleSheet.create({
    title:{
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
        marginTop:-60
        
    },
    subtitle:{
        fontSize:14,
        marginTop:10,
        maxWidth:'70%',
        textAlign:'center',
        lineHeight:20
    },
    indicator:{
        height:15,
        width:15,
        borderRadius:50,
        backgroundColor: '#D9D9D9',
        marginHorizontal:2,
    },
    btn:{
        height:50,
        borderRadius:50,
        backgroundColor:COLORS.green,
        justifyContent:'center',
        alignItems:"center",
    },
    btnSkip:{
        height:50,
        borderRadius:50,
        backgroundColor:COLORS.white,
        justifyContent:'center',
        alignItems:"center",
    },
    btnLast:{
        height:50,
        borderRadius:50,
        backgroundColor:COLORS.green,
        justifyContent:'center',
        alignItems:"center",
        marginTop:-50
    },
})