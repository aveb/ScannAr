"use strict";

import React, { Component, useState } from "react";

import { StyleSheet, Button, View } from "react-native";

import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroARSceneNavigator,
  ViroFlexView,
  ViroARTrackingTargets,
  ViroARImageMarker,
  ViroNode,
  ViroAnimations,
  ViroAnimatedImage,
} from "react-viro";

import ARNavBar from "../components/NavBar/ARNavBar";

// this will be targets given in props or from state
// let targets = [];

const ARScreen = ({ navigator }) => {
  return (
    <View style={styles.screen}>
    <ARNavBar navigator={navigator} />
      <ViroARSceneNavigator
        initialScene={{
          scene: ARscene
        }}
      />
    </View>
  );
};

const ARscene = () => {
  var [text, setText] = useState('cool')
  var [runAnimation, setAnimation] = useState(false);
  return (
    <ViroARScene>
      <ViroText
        text={`${runAnimation}`}
        scale={[0.5, 0.5, 0.5]}
        position={[0, 0, -1]}
        style={styles.helloWorldTextStyle}
      />
      <ViroNode>
        <ViroARImageMarker target={"targetOne"}
          onAnchorFound={
            () => setAnimation(true)}
        >
          <ViroNode key="card">
            <ViroNode
              opacity={0} position={[0, -0.02, 0]}
              dragType="FixedToWorld"
              animation={{
                name: 'animateImage',
                run: runAnimation,
                loop: false
              }}
            >
              <ViroFlexView
                rotation={[-90, 0, 0]}
                height={1}
                width={1}
                style={styles.card}
              >
                <ViroFlexView
                  style={styles.cardWrapper}
                >
                  {/* <ViroImage
                    height={0.015}
                    width={0.015}
                    style={styles.image}
                    source={require('./res/avatar.png')}
                  /> */}
                  <ViroText
                    textClipMode="None"
                    text="This worked!"
                    scale={[.25, .25, .25]}
                    style={styles.textStyle}
                  />
                </ViroFlexView>
                <ViroFlexView
                  // onTouch={() => alert("twitter")}
                  style={styles.subText}
                >
                  <ViroText
                    width={0.01}
                    height={0.01}
                    textAlign="left"
                    textClipMode="None"
                    text="THIS WORKEDDD"
                    scale={[.1, .1, .1]}
                    style={styles.textStyle}
                  />
                  {/* <ViroAnimatedImage
                    height={0.11}
                    width={0.1}
                    loop={true}
                    source={{ url: (`https://i.ibb.co/qWf8pm0/Cabinet.jpg`) }}
                    animation={{
                      name: 'animateImage',
                      run: runAnimation,
                      // loop: false
                    }}
                  /> */}
                </ViroFlexView>
              </ViroFlexView>
            </ViroNode>
          </ViroNode>
        </ViroARImageMarker>
      </ViroNode>
      </ViroARScene>
  );
};

ViroARTrackingTargets.createTargets({
  "targetOne": {
    source: { url: (`https://i.ibb.co/qWf8pm0/Cabinet.jpg`)},
    orientation: "Up",
    physicalWidth: 1 // real world width in meters
  },
});

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  helloWorldTextStyle: {
    fontFamily: "Arial",
    fontSize: 30,
    color: "#ffffff",
    textAlignVertical: "center",
    textAlign: "center"
  },
  card: {
    flexDirection: 'column',
    backgroundColor: 'white',
    opacity: 0.5
  },
  cardWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 0.001,
    flex: .5,
  },
  textStyle: {
    flex: .5,
    fontFamily: 'Roboto',
    fontSize: 30,
    color: 'black',
    textAlignVertical: 'top',
    textAlign: 'left',
    fontWeight: 'bold',
  },
});

ViroAnimations.registerAnimations({
  animateImage: {
    properties: {
      positionX: 0.05,
      opacity: 1.0
    },
    easing: "Bounce",
    duration: 500
  },
  animateViro: {
    properties: {
      positionZ: 0.02,
      opacity: 1.0,
    },
    easing: "Bounce",
    duration: 500
  }
});

export default ARScreen;

