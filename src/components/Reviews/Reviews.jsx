import React, { useRef } from 'react';
import {
  Container,
  Details,
  FeaturesForm,
} from 'components/Features/Features.styled';
import ModalForm from 'components/ModalForm/ModalForm';
import {
  Capital,
  ListItem,
  ListWrapper,
  RatingItem,
  RatingUl,
  ReviewsDescription,
  ReviewsName,
  ReviewsUl,
  StarIcon,
} from './Reviews.styled';

const Reviews = ({ reviews }) => {
  //реф (ref) для получения доступа к DOM-элементу.
  const formRef = useRef(null);

  return (
    <Container>
      <Details>
        <ReviewsUl>
          {reviews.map((review, index) => (
            <ListItem key={index}>
              <ListWrapper>
                <Capital>{review.reviewer_name.charAt(0)}</Capital>
                <div>
                  <ReviewsName>{review.reviewer_name}</ReviewsName>
                  {/* <p>Rating: {review.reviewer_rating}</p> */}
                  <RatingUl>
                    {[...Array(5)].map((_, i) => (
                      <RatingItem key={i}>
                        <StarIcon
                          fill={
                            i < review.reviewer_rating ? '#ffc531' : '#f2f4f7'
                          }
                          name="star"
                          width="16px"
                          height="16px"
                        />
                      </RatingItem>
                    ))}
                  </RatingUl>
                </div>
              </ListWrapper>
              <ReviewsDescription>{review.comment}</ReviewsDescription>
            </ListItem>
          ))}
        </ReviewsUl>
      </Details>
      <FeaturesForm ref={formRef}>
        <ModalForm formRef={formRef} />
      </FeaturesForm>
    </Container>
  );
};

export default Reviews;
