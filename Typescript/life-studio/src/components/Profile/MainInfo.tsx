import {FC, SyntheticEvent} from 'react';
import {Row, Col} from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux';

// Components
import Avatar from '../shared/Avatar';

// Actions
import {editProfileData} from '../../store/profile/profile.actions';

// Constants
import {fullWidth} from '../../utils/constants';
import {RootStore} from '../../store/configureStore';


const MainInfo: FC = () => {
  const dispatch = useDispatch();
  const {profileData} = useSelector((state: RootStore) => state.profile);

  const handleChangeAvatar = async (e: SyntheticEvent<HTMLInputElement>) => {
    const {files} = e.currentTarget;

    if (files && files[0]) {
      const fileReader = new FileReader();

      fileReader.addEventListener('load', (e: ProgressEvent<FileReader>) => {
        if (e.target?.result && profileData) {
          const data = {
            avatar: e.target.result,
            email: profileData.email,
            name: profileData.name
          };
          dispatch(editProfileData(profileData.id, data));
        } else {
          alert('Something went wrong.');
        }
      });
      fileReader.readAsDataURL(files[0]);
    }
  };

  return (
    <Row className="px-3 bg-white rounded border border-1 border-primary">
      <Col className="p-4 border-end border-primary border-1" lg={4} xs={12}>
        <div className="d-flex flex-column align-items-center justify-content-start">
          <Avatar src={profileData?.avatar} size={fullWidth} />
          <label className="btn btn-success mt-2" htmlFor="upload">
            Upload avatar
            <input onChange={handleChangeAvatar} type="file" id="upload" hidden accept="image/*" />
          </label>
        </div>
      </Col>
      <Col className="p-4" lg={8} xs={12}>
        <div>
          <p><b>ID:</b> {profileData?.id}</p>
          <p><b>Name:</b> {profileData?.name}</p>
          <p><b>Email:</b> {profileData?.email}</p>
        </div>
      </Col>
    </Row>
  );
};

export default MainInfo;