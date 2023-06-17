import React from 'react';
import {SvgProps} from 'react-native-svg';

import {ThemeColors, ThemeSpacing} from '../../global/theme/lightTheme';
import {useAppTheme} from '../../hooks/useAppTheme';

import EyeOn from './../../assets/icons/eye-on.svg';
import EyeOff from './../../assets/icons/eye-off.svg';
import ArrowLeft from './../../assets/icons/arrow-left.svg';
import ArrowRight from './../../assets/icons/arrow-right.svg';
import BellOn from './../../assets/icons/bell-on.svg';
import Bell from './../../assets/icons/bell.svg';
import BookmarkFill from './../../assets/icons/bookmark-fill.svg';
import Bookmark from './../../assets/icons/bookmark.svg';
import Camera from './../../assets/icons/camera.svg';
import ChatOn from './../../assets/icons/chat-on.svg';
import Chat from './../../assets/icons/chat.svg';
import Check from './../../assets/icons/check.svg';
import ChevronRight from './../../assets/icons/chevron-right.svg';
import Comment from './../../assets/icons/comment.svg';
import FlashOff from './../../assets/icons/flash-off.svg';
import FlashOn from './../../assets/icons/flash-on.svg';
import HeartFill from './../../assets/icons/heart-fill.svg';
import Heart from './../../assets/icons/heart.svg';
import HomeFill from './../../assets/icons/home-fill.svg';
import Home from './../../assets/icons/home.svg';
import Message from './../../assets/icons/message.svg';
import NewPost from './../../assets/icons/new-post.svg';
import ProfileFill from './../../assets/icons/profile-fill.svg';
import Profile from './../../assets/icons/profile.svg';
import Search from './../../assets/icons/search.svg';
import Settings from './../../assets/icons/settings.svg';
import Trash from './../../assets/icons/trash.svg';

const icons = {
  eyeOn: EyeOn,
  eyeOff: EyeOff,
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
  bellOn: BellOn,
  bell: Bell,
  bookmarkFill: BookmarkFill,
  bookmark: Bookmark,
  camera: Camera,
  chatOn: ChatOn,
  chat: Chat,
  check: Check,
  chevronRight: ChevronRight,
  comment: Comment,
  flashOff: FlashOff,
  flashOn: FlashOn,
  heartFill: HeartFill,
  heart: Heart,
  homeFill: HomeFill,
  home: Home,
  hessage: Message,
  newPost: NewPost,
  profileFill: ProfileFill,
  profile: Profile,
  search: Search,
  settings: Settings,
  trash: Trash,
};

interface Props extends Omit<SvgProps, 'width' | 'height'> {
  name: keyof typeof icons;
  color?: ThemeColors;
  size?: ThemeSpacing;
}

export function Icon({
  name,
  color = 'backgroundContrast',
  size = 's20',
  ...props
}: Props) {
  const {colors, spacing} = useAppTheme();
  const svgColor = colors[color];
  const svgSpacing = spacing[size];

  const SVGIcon = icons[name];

  return (
    <SVGIcon
      color={svgColor}
      width={svgSpacing}
      height={svgSpacing}
      {...props}
    />
  );
}
