export default {
  root: {
    width: '50%',
    marginTop: 50,
    marginBottom: 20,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  description: {
    color: '#545252',
  },
  label: {
    marginBottom: 10,
  },
  valueText: {
    color: '#000066',
    fontWeight: '600',
    margin: '5px 5px 0',
  },
  code: {
    margin: '10px 0',
    textAlign: 'left',
  },
  info: {
    fontStyle: 'italic',
    color: '#3131d4',
    fontSize: 15,
    margin: '5px 0',
  },
  sliderWrapper: {
    width: '75%',
  },
  slider: {
    height: 20,
  },
  trackStyle: {
    height: 5,
    backgroundColor: '#e6e6e6',
    border: 'transparent',
    top: 7,
    boxShadow: 'inset 0px 1px 4px rgba(0, 0, 0, 1)'
  },
  highlightedTrackStyle: {
    height: 5,
    backgroundColor: '#ff8100',
    border: 'transparent',
    top: 7,
  },
  handleStyle: {
    height: 14,
    width: 14,
    backgroundColor: '#e8e8e8',
    border: '1px solid #b7b7b7'
  },
  hoveredHandleStyle: {
    boxShadow: '0px 0px 5px 0px #dc0d0d',
  },
  activeHandleStyle: {
    backgroundColor: 'white',
    boxShadow: 'inset 0px 0px 5px 0px #dc0d0d',
  },
  focusedHandleStyle: {
    boxShadow: '0px 0px 5px 0px #dc0d0d',
  },
};