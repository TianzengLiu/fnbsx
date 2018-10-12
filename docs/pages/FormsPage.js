import React from "react";
import {
  Container,
  Row,
  Col,
  Input,
  Button,
  Fa,
  Card,
  CardBody,
  Modal,
  ModalBody,
  ModalFooter,
  CardImage, 
  CardTitle, 
  CardText
} from "mdbreact";

import DocsLink from "./DocsLink";

class FormsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <Container className="mt-5">
        <DocsLink
          title="Fanbase"
          href="https://mdbootstrap.com/react/components/forms/"
        />
        
        
        
       
        <h2 className="mb-5">Pitch</h2>
        <Row className="my-5">
          <Col md="6">
            <form>
              
              <div className="grey-text">
                <Input
                  label="Working Title"
                  icon="user"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                />
                <Input
                  label="Tag Line"
                  icon="envelope"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                />
                <Input
                  label="Image"
                  icon="tag"
                  group
                  type=""
                  validate
                  error="wrong"
                  success="right"
                />
                <Input
                  label="Video Pitch"
                  icon="tag"
                  group
                  type=""
                  validate
                  error="wrong"
                  success="right"
                />
                <Input
                  label="Video Promo"
                  icon="tag"
                  group
                  type=""
                  validate
                  error="wrong"
                  success="right"
                />
                <Input
                  label="Attachments"
                  icon="tag"
                  group
                  type=""
                  validate
                  error="wrong"
                  success="right"
                />
                <Input
                  type="textarea"
                  rows="2"
                  label="Destription"
                  icon="pencil"
                />
              </div>
              <div className="text-center">
                <Button outline color="blue">
                  Send <Fa icon="paper-plane-o" className="ml-1" />
                </Button>
              </div>
            </form>
          </Col>

          <Col md="5">
          <h2 className="mb-5">Preview</h2>
          <hr className="my-5" />
          <Card>
          <CardImage
            src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg"
            alt="Card image cap"
            top
            hover
            overlay="white-slight"
          />
          <CardBody>
            <CardTitle tag="h5">Architect Frictionless Supply-Chains</CardTitle>
            <CardTitle tag="h6">By <small>Jonathan Howell</small></CardTitle>
            <CardText>
            MTS ASL Curriculum Workbook is a reproducible study book to build Early Literacy and Academic skills for primary 
            </CardText>
            
            <div class="card-footer text-muted">
	<div class="row ">
			<div class="col-12">
			</div>
			<div class="col-12">
				<div class="row">
					<div class="col-4 text-center">
						<p class="mt-0 mb-0">Fanancers</p>
						<h6 class="mt-0 mb-0"><strong>117</strong></h6>
					</div>
					<div class="col-4 text-center">
						<p class="mt-0 mb-0">Fanancing</p>
						<h6 class="mt-0 mb-0"><strong>$50,000</strong></h6>
					</div>
					<div class="col-4 text-center">
						<p class="mt-0 mb-0">License</p>
						<h6 class="mt-0 mb-0"><strong>&infin;</strong></h6>
					</div>
				</div>
			</div>
		</div>
  </div>
  
 
            <Button color="primary" size="md">
              read more
            </Button>
          </CardBody>
        </Card>
          </Col>
        </Row>
        



        <hr className="my-5" />
        <h2 className="mb-5">A form within a modal</h2>
        <Row>
          <Col size="12" className="text-center mb-5">
            <Button color="info" onClick={this.toggle}>
              Launch modal contact form
            </Button>
            <Modal
              isOpen={this.state.modal}
              toggle={this.toggle}
              className="cascading-modal"
            >
              <div className="modal-header primary-color white-text">
                <h4 className="title">
                  <Fa className="fa fa-pencil" /> Contact form
                </h4>
                <button type="button" className="close" onClick={this.toggle}>
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <ModalBody className="grey-text">
                <Input
                  size="sm"
                  label="Your name"
                  icon="user"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                />
                <Input
                  size="sm"
                  label="Your email"
                  icon="envelope"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                />
                <Input
                  size="sm"
                  label="Subject"
                  icon="tag"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                />
                <Input
                  size="sm"
                  type="textarea"
                  rows="2"
                  label="Your message"
                  icon="pencil"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" onClick={this.toggle}>
                  Close
                </Button>{" "}
                <Button color="primary">Save changes</Button>
              </ModalFooter>
            </Modal>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default FormsPage;
