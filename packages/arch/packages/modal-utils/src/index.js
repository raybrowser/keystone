// @flow
export {
  Fade,
  SlideUp,
  SlideDown,
  SlideInHorizontal,
  ZoomInDown,
  TransitionProvider,
  withTransitionState,
} from './transitions';
export type { TransitionState } from './transitions';

export { Blanket } from './Blanket';

export { default as withModalHandlers } from './withModalHandlers';
export type { ModalHandlerProps } from './withModalHandlers';

// Generate a unique enough ID
export function generateUEID() {
  let first = (Math.random() * 46656) | 0;
  let second = (Math.random() * 46656) | 0;
  first = ('000' + first.toString(36)).slice(-3);
  second = ('000' + second.toString(36)).slice(-3);
  return first + second;
}
