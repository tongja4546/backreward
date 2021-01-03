import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dialog, Button, List, ListItem, TextField } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

import { useDropzone } from 'react-dropzone';
import ReactQuill from 'react-quill';

import Autocomplete from '@material-ui/lab/Autocomplete';

import CloseTwoToneIcon from '@material-ui/icons/CloseTwoTone';
import CloudUploadTwoToneIcon from '@material-ui/icons/CloudUploadTwoTone';
import CheckIcon from '@material-ui/icons/Check';

const ProductsPageTitleActions = () => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);
  const [value, setValue] = useState('');

  const {
    acceptedFiles,
    isDragActive,
    isDragAccept,
    isDragReject,
    getRootProps,
    getInputProps
  } = useDropzone({
    accept: 'image/jpeg, image/png'
  });

  const files = acceptedFiles.map((file) => (
    <ListItem
      className="font-size-sm px-3 py-2 text-primary d-flex justify-content-between align-items-center"
      key={file.path}>
      <span>{file.path}</span>{' '}
      <span className="badge badge-pill bg-neutral-warning text-warning">
        {file.size} bytes
      </span>
    </ListItem>
  ));

  const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
    { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
    { title: 'Forrest Gump', year: 1994 },
    { title: 'Inception', year: 2010 },
    { title: 'The Lord of the Rings: The Two Towers', year: 2002 },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: 'Goodfellas', year: 1990 },
    { title: 'The Matrix', year: 1999 },
    { title: 'Seven Samurai', year: 1954 },
    { title: 'Star Wars: Episode IV - A New Hope', year: 1977 },
    { title: 'City of God', year: 2002 },
    { title: 'Se7en', year: 1995 },
    { title: 'The Silence of the Lambs', year: 1991 },
    { title: "It's a Wonderful Life", year: 1946 },
    { title: 'Life Is Beautiful', year: 1997 },
    { title: 'The Usual Suspects', year: 1995 },
    { title: 'Léon: The Professional', year: 1994 },
    { title: 'Spirited Away', year: 2001 },
    { title: 'Saving Private Ryan', year: 1998 },
    { title: 'Once Upon a Time in the West', year: 1968 },
    { title: 'American History X', year: 1998 },
    { title: 'Interstellar', year: 2014 },
    { title: 'Casablanca', year: 1942 },
    { title: 'City Lights', year: 1931 },
    { title: 'Psycho', year: 1960 },
    { title: 'The Green Mile', year: 1999 },
    { title: 'The Intouchables', year: 2011 },
    { title: 'Modern Times', year: 1936 },
    { title: 'Raiders of the Lost Ark', year: 1981 },
    { title: 'Rear Window', year: 1954 },
    { title: 'The Pianist', year: 2002 },
    { title: 'The Departed', year: 2006 },
    { title: 'Terminator 2: Judgment Day', year: 1991 },
    { title: 'Back to the Future', year: 1985 },
    { title: 'Whiplash', year: 2014 },
    { title: 'Gladiator', year: 2000 },
    { title: 'Memento', year: 2000 },
    { title: 'The Prestige', year: 2006 },
    { title: 'The Lion King', year: 1994 },
    { title: 'Apocalypse Now', year: 1979 },
    { title: 'Alien', year: 1979 },
    { title: 'Sunset Boulevard', year: 1950 },
    {
      title:
        'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
      year: 1964
    },
    { title: 'The Great Dictator', year: 1940 },
    { title: 'Cinema Paradiso', year: 1988 },
    { title: 'The Lives of Others', year: 2006 },
    { title: 'Grave of the Fireflies', year: 1988 },
    { title: 'Paths of Glory', year: 1957 },
    { title: 'Django Unchained', year: 2012 },
    { title: 'The Shining', year: 1980 },
    { title: 'WALL·E', year: 2008 },
    { title: 'American Beauty', year: 1999 },
    { title: 'The Dark Knight Rises', year: 2012 },
    { title: 'Princess Mononoke', year: 1997 },
    { title: 'Aliens', year: 1986 },
    { title: 'Oldboy', year: 2003 },
    { title: 'Once Upon a Time in America', year: 1984 },
    { title: 'Witness for the Prosecution', year: 1957 },
    { title: 'Das Boot', year: 1981 },
    { title: 'Citizen Kane', year: 1941 },
    { title: 'North by Northwest', year: 1959 },
    { title: 'Vertigo', year: 1958 },
    { title: 'Star Wars: Episode VI - Return of the Jedi', year: 1983 },
    { title: 'Reservoir Dogs', year: 1992 },
    { title: 'Braveheart', year: 1995 },
    { title: 'M', year: 1931 },
    { title: 'Requiem for a Dream', year: 2000 },
    { title: 'Amélie', year: 2001 },
    { title: 'A Clockwork Orange', year: 1971 },
    { title: 'Like Stars on Earth', year: 2007 },
    { title: 'Taxi Driver', year: 1976 },
    { title: 'Lawrence of Arabia', year: 1962 },
    { title: 'Double Indemnity', year: 1944 },
    { title: 'Eternal Sunshine of the Spotless Mind', year: 2004 },
    { title: 'Amadeus', year: 1984 },
    { title: 'To Kill a Mockingbird', year: 1962 },
    { title: 'Toy Story 3', year: 2010 },
    { title: 'Logan', year: 2017 },
    { title: 'Full Metal Jacket', year: 1987 },
    { title: 'Dangal', year: 2016 },
    { title: 'The Sting', year: 1973 },
    { title: '2001: A Space Odyssey', year: 1968 },
    { title: "Singin' in the Rain", year: 1952 },
    { title: 'Toy Story', year: 1995 },
    { title: 'Bicycle Thieves', year: 1948 },
    { title: 'The Kid', year: 1921 },
    { title: 'Inglourious Basterds', year: 2009 },
    { title: 'Snatch', year: 2000 },
    { title: '3 Idiots', year: 2009 },
    { title: 'Monty Python and the Holy Grail', year: 1975 }
  ];

  return (
    <>
      <Button onClick={toggleModal} className="btn-primary">
        <span className="btn-wrapper--icon">
          <FontAwesomeIcon icon={['fas', 'plus']} />
        </span>
        <span className="btn-wrapper--label">Create Product</span>
      </Button>

      <Dialog
        scroll="body"
        open={modal}
        maxWidth="md"
        onClose={toggleModal}
        classes={{ paper: 'w-100 border-0 bg-white' }}>
        <div className="p-4 text-center">
          <h4 className="font-size-xxl font-weight-bold mb-2">
            Create New Product
          </h4>
          <p className="text-black-50 mb-0">
            Fill in the form fields below to create your product listing.
          </p>
        </div>
        <div className="divider bg-dark opacity-2" />
        <div className="p-4">
          <div className="font-weight-bold font-size-lg">Title</div>

          <p className="font-size-sm text-black-50">
            Write the title of your new product
          </p>
          <TextField
            fullWidth
            placeholder="Product title..."
            labelWidth={0}
            variant="outlined"
          />
        </div>
        <div className="divider bg-dark opacity-3" />
        <div className="p-4">
          <div className="font-weight-bold font-size-lg">Images</div>

          <p className="font-size-sm text-black-50">
            Use the widget below to upload images for your product
          </p>

          <div className="dropzone">
            <div {...getRootProps({ className: 'dropzone-upload-wrapper' })}>
              <input {...getInputProps()} />
              <div className="dropzone-inner-wrapper">
                {isDragAccept && (
                  <div>
                    <div className="d-100 btn-icon mb-3 hover-scale-lg bg-success shadow-success-sm rounded-circle text-white">
                      <CheckIcon className="d-50" />
                    </div>
                    <div className="font-size-sm text-success">
                      All files will be uploaded!
                    </div>
                  </div>
                )}
                {isDragReject && (
                  <div>
                    <div className="d-100 btn-icon mb-3 hover-scale-lg bg-danger shadow-danger-sm rounded-circle text-white">
                      <CloseTwoToneIcon className="d-50" />
                    </div>
                    <div className="font-size-sm text-danger">
                      Some files will be rejected!
                    </div>
                  </div>
                )}
                {!isDragActive && (
                  <div>
                    <div className="d-100 btn-icon mb-3 hover-scale-lg bg-white shadow-light-sm rounded-circle text-primary">
                      <CloudUploadTwoToneIcon className="d-50" />
                    </div>
                    <div className="font-size-sm">
                      Drag and drop files here{' '}
                      <span className="font-size-xs text-dark">
                        (jpg/png images)
                      </span>
                    </div>
                  </div>
                )}

                <small className="py-2 text-black-50">or</small>
                <div>
                  <Button className="btn-primary hover-scale-sm font-weight-bold btn-pill px-4">
                    <span className="px-2">Browse Files</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="font-weight-bold my-4 text-uppercase text-dark font-size-sm text-center">
              Uploaded Files
            </div>
            {files.length <= 0 && (
              <div className="text-info text-center font-size-sm">
                Uploaded demo files will appear here!
              </div>
            )}
            {files.length > 0 && (
              <div>
                <Alert className="btn-success text-center mb-3">
                  You have uploaded <b>{files.length}</b> files!
                </Alert>
                <List className="font-size-sm">{files}</List>
              </div>
            )}
          </div>
        </div>
        <div className="divider bg-dark opacity-2" />
        <div className="p-4">
          <div className="font-weight-bold font-size-lg">Description</div>

          <p className="font-size-sm text-black-50">
            Write a short description for your new product
          </p>

          <ReactQuill
            theme="snow"
            value={value}
            onChange={setValue}
            placeholder="Example placeholder..."
          />
        </div>
        <div className="divider bg-dark opacity-2" />
        <div className="p-4">
          <div className="font-weight-bold font-size-lg">Tags</div>

          <p className="font-size-sm text-black-50">
            Add some tags for this product from existing ones
          </p>

          <Autocomplete
            multiple
            id="tags-outlined"
            options={top100Films}
            getOptionLabel={(option) => option.title}
            defaultValue={[top100Films[13]]}
            filterSelectedOptions
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                placeholder="Select tags..."
                fullWidth
              />
            )}
          />
        </div>
        <div className="divider bg-dark opacity-3" />
        <div className="p-4 rounded-bottom d-flex justify-content-end bg-secondary">
          <Button
            onClick={toggleModal}
            className="btn-neutral-danger font-size-sm mr-4">
            Cancel
          </Button>
          <Button className="btn-success font-weight-bold">Save now</Button>
        </div>
      </Dialog>
    </>
  );
};

export default ProductsPageTitleActions;
