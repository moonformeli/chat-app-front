import React, { useEffect, useState } from 'react';

import Navigation from '../../components/Navigation/Navigation';
import RoomBody from '../../components/Room/RoomBody';
import RoomController from '../../controllers/room/RoomController';
import { IRoom } from '../../models/room/interfaces/IRoom';
import RoomQueryBuilder from '../../models/room/RoomQueryBuilder';

interface IRoomMatch {
  path: string;
  url: string;
  isExact: boolean;
  params: {
    id: string;
  };
}

interface IRoomProps {
  match: IRoomMatch;
}

const Room: React.FC<IRoomProps> = ({ match }) => {
  const [detail, setDetail] = useState<IRoom>({
    id: '',
    messages: [],
    username: ''
  });
  const controller = new RoomController(new RoomQueryBuilder('/room'));

  const getRoomDetail = async () => {
    const res = await controller.getRoomDetail<IRoom>({
      id: match.params.id || ''
    });

    const detail = res.caseOf<void, IRoom>({
      left: () => {},
      right: r => r
    });

    if (!detail || detail.isError) {
      return;
    }

    setDetail(detail.data);
  };

  useEffect(() => {
    getRoomDetail();
  }, []);

  return (
    <>
      <Navigation
        title={detail.username}
        renderLeft={true}
        onClickLeft={() => (location.href = '/list')}
      />
      <RoomBody messages={detail.messages} />
    </>
  );
};
export default Room;
