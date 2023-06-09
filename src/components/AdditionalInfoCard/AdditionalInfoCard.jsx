import css from './AdditionalInfoCard.module.css';
import { IMG_BASE_URL, CAST_IMG_PLACEHOLDER_URL } from 'api/api-config';

const AdditionalInfoCard = ({
  profilePath,
  name,
  character,
  author,
  reviewDate,
  reviewContent,
}) => {

  const CAST_IMG_URL = `${IMG_BASE_URL}${profilePath}`;

  const castImgUrl = profilePath => {
    if (profilePath) {
      return CAST_IMG_URL;
    } else {
      return CAST_IMG_PLACEHOLDER_URL;
    }
  };

  return (
    <li
      className={`${css.additionaInfoItem} ${profilePath && css.castItem} ${
        reviewContent && css.reviewItem
      }`}
    >
      {name && (
        <img
          className={css.additionaInfoImg}
          src={castImgUrl(profilePath)}
          alt={name}
          width="80px"
        />
      )}
      <p className={css.additionaInfoTitle}>{name || author}</p>
      {character && <p className={css.additionaInfoText}>{character}</p>}
      {reviewDate && <p className={css.additionaInfoText}>{reviewDate}</p>}
      {reviewContent && (
        <p className={css.additionaInfoText}>{reviewContent}</p>
      )}
    </li>
  );
};

export default AdditionalInfoCard;
