import Theatre from '../models/Theatre.js';


export const getTheatres = async (req, res) => {
  try {
    const theatres = await Theatre.find({}).sort({ createdAt: -1 });

    res.status(200).json({
      data: {
        theatres,
      },
      success: true,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: 'Something went wrong.',
      e,
    });
  }
};

export const createTheatre = async (req, res) => {
  try {
    const { name, image, date } = req.body;

    const newTheatre = new Theatre({
      date,
      name,
      image
    });

    await newTheatre.save();

    res.status(201).json({
      success: true,
      data: {
        theatre: newTheatre,
      },
      message: 'You have successfully created a play.',
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: 'Something went wrong.',
      e,
    });
  }
};

export const deleteTheatre = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Theatre.deleteOne({ _id: id });

    res.status(200).json({
      data: {
        deletedTheatre: {
          ...deleted,
          id
        },
      },
      success: true,
      message: 'Category has successfully been deleted.',
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: 'Something went wrong.',
      e,
    });
  }
};