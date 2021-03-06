import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Animated,
  Dimensions,
} from "react-native";
import list from "./list";
import Card from "./card";
import styles from "./styles";
const { width: ScreenWidth } = Dimensions.get("window");

export default function GoNative() {
  const offset = new Animated.ValueXY({ x: 0, y: 50 });
  const opacity = new Animated.Value(0);
  const scrollOffset = new Animated.Value(0);
  const aimateHeader = useRef(new Animated.diffClamp(scrollOffset, 0, 200))
    .current;
  const listProgress = useRef(new Animated.Value(0)).current;
  const cardInfoProgress = useRef(new Animated.Value(0)).current;

  const [selectedCard, setSelectedCard] = useState(null);
  const [cardVisible, setCardVisible] = useState(false);

  const AnimatedImageBackground = Animated.createAnimatedComponent(
    ImageBackground
  );

  function selectCard(card) {
    setSelectedCard(card);

    Animated.timing(listProgress, {
      toValue: 100,
      duration: 300,
    }).start(() => {
      setCardVisible(true);
    });

    Animated.timing(cardInfoProgress, {
      toValue: 100,
      duration: 600,
    }).start();
  }

  useEffect(() => {
    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        bounciness: 10,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
      }),
    ]).start();
  }, [cardVisible]);
  return (
    <>
      <Animated.View
        style={[
          {
            transform: [
              {
                translateY: aimateHeader.interpolate({
                  inputRange: [0, 150],
                  outputRange: [0, -130],
                  extrapolate: "clamp",
                }),
              },
            ],
          },
          styles.headerImageContainer,
        ]}
      >
        <AnimatedImageBackground
          resizeMode="cover"
          source={cardVisible ? selectedCard.image : null}
          style={[
            styles.headerImage,
            {
              opacity: cardVisible
                ? cardInfoProgress.interpolate({
                    inputRange: [0, 100],
                    outputRange: [0, 1],
                  })
                : 1,
            },
          ]}
        >
          <Animated.Text
            style={[
              {
                fontSize: aimateHeader.interpolate({
                  inputRange: [0, 150],
                  outputRange: [26, 20],
                  extrapolate: "clamp",
                }),
              },
              styles.headerTitle,
            ]}
          >
            {cardVisible ? selectedCard.name : "Go Native"}
          </Animated.Text>
        </AnimatedImageBackground>
      </Animated.View>

      <Animated.View
        style={{ transform: [...offset.getTranslateTransform()], opacity }}
      >
        {cardVisible ? (
          <Animated.View
            style={{
              marginTop: aimateHeader.interpolate({
                inputRange: [0, 150],
                outputRange: [200, 100],
              }),
            }}
          >
            <Card card={selectedCard} />
          </Animated.View>
        ) : (
          <Animated.View
            style={{
              transform: [
                {
                  translateX: listProgress.interpolate({
                    inputRange: [0, 100],
                    outputRange: [0, ScreenWidth],
                  }),
                },
              ],
            }}
          >
            <ScrollView
              scrollEventThrottle={16}
              onScroll={Animated.event([
                {
                  nativeEvent: {
                    contentOffset: { y: scrollOffset },
                  },
                },
              ])}
              contentContainerStyle={{ marginTop: 220, zIndex: 1 }}
            >
              {list.map((card) => (
                <TouchableOpacity
                  key={card.name}
                  onPress={() => selectCard(card)}
                  activeOpacity={1}
                >
                  <Card card={card} />
                </TouchableOpacity>
              ))}
            </ScrollView>
          </Animated.View>
        )}
      </Animated.View>
    </>
  );
}
