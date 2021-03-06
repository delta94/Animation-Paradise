import ImageBlur from "../animations/image-blur";
import Modal1 from "../animations/Modal1";
import Deck from "../animations/deck-swiper";
import List from "../animations/Swipe-list";
import HideInput from "../animations/hide-input";
import SwipeImage from "../animations/swipe-image";
import SwipeImage2 from "../animations/swipe-image-02";
import ShimmerEffect from "../animations/shimmer-effect";
import AirbnbHeader from "../animations/airbnb-header";
import Wallet from "../animations/wallet";
import DragaAndDrop from "../animations/DragAndDrop";
import GoNative from "../animations/GoNative";
import Button from "../animations/buttonAnimation01";
import Toggle from "../animations/Toggle";
import ToggleForm from "../animations/toggleForm";
import SideButton from "../animations/side-button";
import PressController from "../animations/Press-controller";
import ProgressIndicator from "../animations/progress-indicator";

const components = [
  {
    name: "Image Blur",
    container: ImageBlur,
  },
  {
    name: "Modal 1",
    container: Modal1,
  },
  {
    name: "Deck swipe",
    container: Deck,
  },
  {
    name: "Swipe List",
    container: List,
  },
  {
    name: "Hidable input",
    container: HideInput,
  },
  {
    name: "Swipe image",
    container: SwipeImage,
  },
  {
    name: "Shimmer Effect",
    container: ShimmerEffect,
  },
  {
    name: "airbnb header",
    container: AirbnbHeader,
    options: {
      headerShown: false,
    },
  },
  {
    name: "wallet",
    container: Wallet,
  },
  {
    name: "Simple Drag and drop",
    container: DragaAndDrop,
  },
  {
    name: "GoNative",
    container: GoNative,
    options: {
      headerShown: false,
    },
  },
  {
    name: "Button 01",
    container: Button,
  },
  {
    name: "Swipe image 02",
    container: SwipeImage2,
  },
  {
    name: "Toggle",
    container: Toggle,
  },
  {
    name: "Toggle Form",
    container: ToggleForm,
  },
  {
    name: "Side Button ",
    container: SideButton,
  },
  {
    name: "Press Control ",
    container: PressController,
  },
  {
    name: "Progress indicator",
    container: ProgressIndicator,
  },
];

export default components;
