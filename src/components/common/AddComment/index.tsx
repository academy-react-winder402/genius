import { Form, Formik, FormikHelpers } from "formik";
import dotsOneIcon from "../../../assets/images/common/Comments/Icons/textarea-dots-1.svg";
import dotsTwoIcon from "../../../assets/images/common/Comments/Icons/textarea-dots-1.svg";
import dotsThreeIcon from "../../../assets/images/common/Comments/Icons/textarea-dots-1.svg";
import { Field } from "../Field";
import { ErrorMessage } from "../ErrorMessage";

interface AddCommentProps {
  onSubmit: (e: { title: string; describe: string }) => Promise<void>;
  validationSchema: any;
}

const AddComment = ({ onSubmit, validationSchema }: AddCommentProps) => {
  return (
    <div className="addCommentSection">
      <Formik
        initialValues={{ title: "", describe: "" }}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="w-full">
          <div className="w-full relative">
            <div className="mb-3">
              <Field
                id="title"
                name="title"
                placeholder="عنوان نظر ..."
                className="addCommentTitleInput"
              />
              <ErrorMessage name="title" />
              <div className="relative">
                <Field
                  as="textarea"
                  id="describe"
                  name="describe"
                  className="addCommentTextarea"
                  placeholder="نظر خودتو بنویس..."
                />
                <img src={dotsOneIcon} className="absolute bottom-8 left-4" />
                <img src={dotsTwoIcon} className="absolute bottom-6 left-4" />
                <img src={dotsThreeIcon} className="absolute bottom-6 left-6" />
              </div>
              <ErrorMessage name="describe" />
            </div>
          </div>
          <button className="mainButton w-[84px] h-[48px]">ارسال</button>
        </Form>
      </Formik>
    </div>
  );
};

export { AddComment };
