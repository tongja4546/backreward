import React, { useState } from 'react';
import clsx from 'clsx';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Table,
  Switch,
  Grid,
  Input,
  Container,
  Card,
  MenuItem,
  Button,
  List,
  ListItem,
  TextField,
  Select
} from '@material-ui/core';
import ReactQuill from 'react-quill';
export default function LivePreviewExample() {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const [checked1, setChecked1] = useState(false);

  const toggleCheck1 = () => {
    setChecked1(!checked1);
  };
  const [editorState, setValue] =  useState(EditorState.createEmpty());
  const [checked2, setChecked2] = useState(false);

  const toggleCheck2 = () => {
    setChecked2(!checked2);
  };

  const [country, setCountry] = useState('');

  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  return (
    <>
      <Card>
        <div className="card-header d-flex align-items-center justify-content-between card-header-alt p-0">
          <List
            component="div"
            className="w-100 nav-line justify-content-center d-flex nav-line-alt nav-tabs-primary">
            <ListItem
              button
              className="p-4 font-size-md rounded-0"
              selected={activeTab === '1'}
              onClick={() => {
                toggle('1');
              }}>
              <span className="font-weight-bold font-size-sm text-uppercase">
                โปรแกรมสะสมแต้ม dafabet
              </span>
              <div className="divider" />
            </ListItem>
            <ListItem
              button
              className="p-4 font-size-md rounded-0"
              selected={activeTab === '2'}
              onClick={() => {
                toggle('2');
              }}>
              <span className="font-weight-bold font-size-sm text-uppercase">
                ข้อกำหนดและเงื่อนไข
              </span>
              <div className="divider" />
            </ListItem>
            <ListItem
              button
              className="p-4 font-size-md rounded-0"
              selected={activeTab === '3'}
              onClick={() => {
                toggle('3');
              }}>
              <span className="font-weight-bold font-size-sm text-uppercase">
                ติดต่อเรา
              </span>
              <div className="divider" />
            </ListItem>
            <ListItem
              button
              className="p-4 font-size-md rounded-0"
              selected={activeTab === '4'}
              onClick={() => {
                toggle('4');
              }}>
              <span className="font-weight-bold font-size-sm text-uppercase">
                คำถามที่พบบ่อย
              </span>
              <div className="divider" />
            </ListItem>
          </List>

        </div>
        <div className="px-0 py-0 py-lg-4">
          <div
            className={clsx('tab-item-wrapper', { active: activeTab === '1' })}
            index={1}>
            <Container>
              <div className="text-uppercase font-weight-bold text-primary pt-4 font-size-sm">
              โปรแกรมสะสมแต้ม dafabet
              </div>
              <div className="py-4">
              <Editor
                editorState={editorState}
                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
                onEditorStateChange={setValue}
              />
              {/* <Input
                type="textarea"        
                disabled
                value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
              /> */}
              </div>
            </Container>
            <div className="divider mb-4" />
          </div>
          <div
            className={clsx('tab-item-wrapper', { active: activeTab === '2' })}
            index={1}>
            <Container>
              <div className="text-uppercase font-weight-bold text-primary pt-4 font-size-sm">
              ข้อกำหนดและเงื่อนไข
              </div>
              <div className="py-4">
              <Editor
                editorState={editorState}
                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
                onEditorStateChange={setValue}
              />
              {/* <Input
                type="textarea"        
                disabled
                value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
              /> */}
              </div>
            </Container>
            <div className="divider mb-4" />
          </div>
          <div
            className={clsx('tab-item-wrapper', { active: activeTab === '3' })}
            index={1}>
            <Container>
              <div className="text-uppercase font-weight-bold text-primary pt-4 font-size-sm">
              ติดต่อเรา
              </div>
              <div className="py-4">
              <Editor
                editorState={editorState}
                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
                onEditorStateChange={setValue}
              />
              {/* <Input
                type="textarea"        
                disabled
                value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
              /> */}
              </div>
            </Container>
            <div className="divider mb-4" />
          </div>
          <div
            className={clsx('tab-item-wrapper', { active: activeTab === '4' })}
            index={1}>
            <Container>
              <div className="text-uppercase font-weight-bold text-primary pt-4 font-size-sm">
              คำถามที่พบบ่อย
              </div>
              <div className="py-4">
              <Editor
                editorState={editorState}
                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
                onEditorStateChange={setValue}
              />
              {/* <Input
                type="textarea"        
                disabled
                value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
              /> */}
              </div>
            </Container>
            <div className="divider mb-4" />
          </div>
        </div>
      </Card>
    </>
  );
}

