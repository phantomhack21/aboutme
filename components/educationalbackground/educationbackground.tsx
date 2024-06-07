import { User, Tooltip, Chip } from "@nextui-org/react";
import React from "react";
import { DeleteIcon } from "../icons/table/delete-icon";
import { EditIcon } from "../icons/table/edit-icon";
import { EyeIcon } from "../icons/table/eye-icon";
import { educationalbackgrounds } from "./educationbackgrounddata";

interface Props {
  educ: (typeof educationalbackgrounds)[number];
  columnKey: string | React.Key;
}


export const RenderCell = ({ educ, columnKey }: Props) => {
    // @ts-ignore
    const cellValue = educ[columnKey];
    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{
              src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
            }}
            name={cellValue}
          >
            {educ.location}
          </User>
        );
        case "grade":
        return (
            <div>
              <div>
                <span>{cellValue}</span>
              </div>
              <div>
                <span>{educ.grade}</span>
              </div>
            </div>
          );
        case "location":
            return (
                <div>
                  <div>
                    <span>{cellValue}</span>
                  </div>
                  <div>
                    <span>{educ.location}</span>
                  </div>
                </div>
              );
        case "yearstarted":
            return (
                    <div>
                      <div>
                        <span>{cellValue}</span>
                      </div>
                      <div>
                        <span>{educ.yearstarted}</span>
                      </div>
                    </div>
                  );

        case "yearended":
            return (
            <div>
                <div>
                    <span>{cellValue}</span>
                        </div>
                              <div>
                                <span>{educ.yearended}</span>
                              </div>
                            </div>
                          );
        default:
            return cellValue;
    }
};