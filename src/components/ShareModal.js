import Modal from 'react-modal';
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    LinkedinShareButton,
    LinkedinIcon,
    RedditShareButton,
    RedditIcon,
    WhatsappShareButton,
    WhatsappIcon,
    EmailShareButton,
    EmailIcon,
} from 'react-share';
import closeImg from '../images/close.svg';

Modal.setAppElement(document.getElementById('root'));

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        padding: '0 20px 20px 20px',
        transform: 'translate(-50%, -50%)',
        borderRadius: '8px',
    },
    overlay: {
        zIndex: '1000',
    },
    name: {
        fontWeight: '400',
        fontSize: '28px',
        margin: '15px 0px',
    },
    link: {
        border: 'none',
        size: '5',
    },
    topContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginTop: '10px',
    },
    close: {
        cursor: 'pointer',
        border: 'none',
        backgroundColor: 'transparent',
    },
    icons: {
        marginBottom: '10px',
    },
    shareBtn: {
        marginRight: '5px',
    },
    urlContainer: {
        border: '1px solid gray',
        borderRadius: '5px',
        padding: '5px',
    },
    shareText: {
        margin: '0px',
        fontWeight: '500',
    },
    copy: {
        float: 'right',
        cursor: 'pointer',
        backgroundColor: 'transparent',
        border: 'none',
        marginLeft: '10px',
        fontSize: '16px',
        fontWeight: '400',
    },
};

const handleFocus = (e) => {
    e.target.select();
};

export default function ShareModal(props) {
    const link = `${window.location.protocol}//${window.location.host}/${
        window.location.pathname.split('/')[1]
    }/?c=${props.cardInfo.id}`;

    return props.isMainDisplayCard ? (
        <Modal
            isOpen={props.shareModalIsOpen}
            onRequestClose={props.closeShareModal}
            contentLabel="Share Drink"
            key={props.cardInfo.id}
            style={customStyles}
        >
            <div style={customStyles.topContainer}>
                <p style={customStyles.shareText}>Share</p>
                <button
                    style={customStyles.close}
                    onClick={props.closeShareModal}
                >
                    <img src={closeImg} alt="close" />
                </button>
            </div>
            <h2 style={customStyles.name}>{props.cardInfo.name}</h2>
            <div style={customStyles.icons}>
                <FacebookShareButton style={customStyles.shareBtn} url={link}>
                    <FacebookIcon size={32} round={true} />
                </FacebookShareButton>

                <TwitterShareButton style={customStyles.shareBtn} url={link}>
                    <TwitterIcon size={32} round={true} />
                </TwitterShareButton>

                <LinkedinShareButton style={customStyles.shareBtn} url={link}>
                    <LinkedinIcon size={32} round={true} />
                </LinkedinShareButton>

                <RedditShareButton style={customStyles.shareBtn} url={link}>
                    <RedditIcon size={32} round={true} />
                </RedditShareButton>

                <WhatsappShareButton style={customStyles.shareBtn} url={link}>
                    <WhatsappIcon size={32} round={true} />
                </WhatsappShareButton>

                <EmailShareButton style={customStyles.shareBtn} url={link}>
                    <EmailIcon size={32} round={true} />
                </EmailShareButton>
            </div>
            <div style={customStyles.urlContainer}>
                <input
                    style={customStyles.link}
                    value={link}
                    autoFocus
                    onFocus={(e) => handleFocus(e)}
                    readOnly
                />
                <button
                    style={customStyles.copy}
                    onClick={(e) => {
                        navigator.clipboard.writeText(link);
                        e.target.innerText = 'Copied!';
                    }}
                >
                    Copy
                </button>
            </div>
        </Modal>
    ) : null;
}
