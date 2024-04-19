import { PropsWithChildren, createContext, useState } from "react";
import { Track } from "../entities/track";

type PlayerContext = {
  play: () => void;
  pause: () => void;
  previous: () => void;
  next: () => void;
  playTrack: (track: Track) => void;
  playing: boolean;
  currentTrack?: Track;
};

const playerContext = createContext<PlayerContext>({
  playTrack() {
    throw new Error("playTrack() not implemented");
  },
  play() {
    throw new Error("play() not implemented");
  },
  pause() {
    throw new Error("pause() not implemented");
  },
  previous() {
    throw new Error("previous() not implemented");
  },
  next() {
    throw new Error("next() not implemented");
  },
  playing: false,
});

export const PlayerProvider = ({ children }: PropsWithChildren) => {
  const [tracklist, setTracklist] = useState<Track[]>([]);
  const [trackIndex, setTrackIndex] = useState<number>(0);
  const [playing, setPlaying] = useState<boolean>(false);

  const playTrack = (track: Track) => {
    setTracklist([track]);
    setTrackIndex(0);
  };

  const play = () => {
    if (tracklist.length !== 0) {
      setPlaying(true);
    }
  };

  const pause = () => {
    setPlaying(false);
  };

  const next = () => {
    if (trackIndex < tracklist.length - 1) {
      setTrackIndex(trackIndex + 1);
    } else {
      setTrackIndex(0);
      setPlaying(false);
    }
  };

  const previous = () => {
    if (trackIndex > 0) {
      setTrackIndex(trackIndex - 1);
    }
  };

  // console.log(
  //   `playing track ${tracklist[trackIndex]?.title}, playing: ${playing}`
  // );

  return (
    <playerContext.Provider
      value={{
        currentTrack: tracklist[trackIndex],
        playTrack,
        play,
        pause,
        previous,
        next,
        playing,
      }}
    >
      {children}
    </playerContext.Provider>
  );
};

export default playerContext;
