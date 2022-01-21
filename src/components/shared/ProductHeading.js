/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import {
  Row,
  Button,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Collapse,
} from 'reactstrap';
import { injectIntl } from 'react-intl';
import AppPermissions from 'constants/permissions';
import {
  Colxx,
  Separator,
} from '../../../../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../../../../containers/navs/Breadcrumb';
import IntlMessages from '../../../../../../helpers/IntlMessages';
import CustomSearchBar from 'components/common/CustomSearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const ListPageHeading = ({
  intl,
  changePageSize,
  selectedPageSize,
  totalItemCount,
  match,
  startIndex,
  endIndex,
  onSearchKey,
  userPermissions,
  pageSizes,
  toggleModal,
  addBtnTitle,
  onSearchClick,
}) => {
  const [displayOptionsIsOpen, setDisplayOptionsIsOpen] = useState(false);
  const [keyword, setKeyword] = useState('');

  const { messages } = intl;

  return (
    <Row>
      <Colxx xxs="12">
        <div className="mb-2">
          <h1>
            <IntlMessages id="setting.product-family.title.product-family" />{' '}
          </h1>

          <div className="text-zero top-right-button-container">
            {userPermissions.includes(AppPermissions.PS_CreateProductFamily) ? (
              <Button
                color="success"
                size="lg"
                className="top-right-button"
                onClick={() => toggleModal()}
              >
                {addBtnTitle ? (
                  addBtnTitle
                ) : (
                  <IntlMessages id="pages.add-new" />
                )}
              </Button>
            ) : null}
            {'  '}
          </div>
          <Breadcrumb match={match} />
        </div>

        <div className="mb-2">
          <Button
            color="empty"
            className="pt-0 pl-0 d-inline-block d-md-none"
            onClick={() => setDisplayOptionsIsOpen(!displayOptionsIsOpen)}
          >
            <IntlMessages id="pages.display-options" />{' '}
            <FontAwesomeIcon className="text-primary align-middle" icon={faChevronDown} />
          </Button>
          <Collapse
            isOpen={displayOptionsIsOpen}
            className="d-md-block"
            id="displayOptions"
          >
            <div className="d-block d-md-inline-block pt-1">
              <CustomSearchBar
                onChange={(e) => {
                  setKeyword(e);
                }}
                onKeyPress={(e) => {
                  onSearchKey(e);
                }}
                onSearchClick={() => onSearchClick(keyword)}
                keyword={keyword}
              />
            </div>
            <div className="float-md-right pt-1">
              <span className="text-muted text-small mr-1">{`${startIndex}-${endIndex} of ${totalItemCount} `}</span>
              <UncontrolledDropdown className="d-inline-block">
                <DropdownToggle caret color="outline-dark" size="xs">
                  {selectedPageSize}
                </DropdownToggle>
                <DropdownMenu right>
                  {pageSizes.map((size, index) => {
                    return (
                      <DropdownItem
                        key={index}
                        onClick={() => changePageSize(size)}
                      >
                        {size}
                      </DropdownItem>
                    );
                  })}
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
          </Collapse>
        </div>
        <Separator className="mb-5" />
      </Colxx>
    </Row>
  );
};

export default injectIntl(ListPageHeading);
