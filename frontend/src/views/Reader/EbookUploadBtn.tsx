import { UploadOutlined } from "@mui/icons-material";
import RoundedButton from "src/components/common/RoundedButton";
import { get } from "lodash-es";
import { ChangeEvent } from "react";
import parseEpub from "src/views/Reader/parserEpub";

export default function EbookUploadBtn() {
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = get(event, "target.files[0]");
    if (file) {
      parseEpub(file);
    }
  };
  return (
    <RoundedButton
      // @ts-expect-error
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<UploadOutlined />}
    >
      Upload(.pdf, .epub)
      <input
        type="file"
        accept=".pdf,.epub"
        hidden
        onChange={handleFileChange}
      />
    </RoundedButton>
  );
}
