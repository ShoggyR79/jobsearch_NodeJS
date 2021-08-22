const { Job, Application, Profile } = require("../models")

const checkExist = (Model) => async (req, res, next) => {
  const { id } = req.params;
  try {
    const detail = await Model.findOne({ where: { id } });
    if (detail) {
      next();
    } else {
      res.status(404).send(`Id ${id} Not Found`);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const checkEmail = (Model) => async (req, res, next) => {
  const { email } = req.body;
  try {
    const user = Model.findOne({ where: { email } })
    if (user) {
      res.status(400).send("Email already existed")
    } else {
      next()
    }
  } catch (error) {
    res.status(500).send(error)
  }
}

const checkJobBelongs = async (req, res, next) => {
  const { user } = req;
  try {
    const { id } = req.params
    const job = await Job.findOne({ where: { id } })

    if (user.id == job.companyId || user.role == "ADMIN") {
      next()
    } else {
      res.status(403).send("Bài đăng không thuộc về bạn")
    }
  } catch (error) {
    res.status(500).send(error)
  }
}

const checkApplicationBelongs = async (req, res, next) => {
  const { user } = req;
  try {
    const { id } = req.params
    const application = await Application.findOne({ where: { id } })


    if (user.role == "COMPANY") {
      const job = await Job.findOne({ where: { id: application.jobId } })
      if (job.companyId = user.id) {
        next()
      }
    } else if (user.id == application.applicantId || user.role == "ADMIN") {
      next()
    } else {
      res.status(403).send("Bạn không có quyền xử lý đơn nộp này")
    }
  } catch (error) {
    res.status(500).send(error)
  }
}

const checkProfileBelongs = async (req, res, next) => {
  const { user } = req;
  try {
    const { id } = req.params
    const profile = await Profile.findOne({ where: { id } })

    if (user.id == profile.applicantId || user.role == "ADMIN") {
      next()
    } else {
      res.status(403).send("Bạn không có quyền thay đổi hồ sơ này này")
    }
  } catch (error) {
    res.status(500).send(error)
  }
}


const checkProfileExists = async (req, res, next) => {
  const { user } = req;
  try {
    const profile = await Profile.findOne({
      where: { applicantId: user.id }
    })
    if (profile) {
      next()
    } else {
      res.status(404).send("profile not found")
    }
  } catch (error) {
    res.status(500).send(error)
  }
}
const checkAlreadyApplied = async (req, res, next) => {
  const { user } = req;
  const { id } = req.params
  try {
    const application = await Application.findOne({
      where: {
        applicantId: user.id,
        jobId: id
      }
    });
    if (application) {
      res.status(400).send("Bạn đã nộp đơn cho vị trí này rồi")
    } else {
      next()
    }
  } catch (error) {
    res.status(500).send(error)
  }
}

const checkSubTabBelongs = (Model) => async (req, res, next) => {
  const { user } = req;
  const { id } = req.params;
  if (user.role == "ADMIN") {
    next()
  }
  try {
    const profile = await Profile.findOne({
      where: {
        applicantId: user.id
      }
    });
    const subTab = await Model.findOne({
      where: {
        id
      }
    })
    if (subTab.profileId == profile.id) {
      next()
    } else {
      res.status(400).send("Bạn không có quyền sửa tab này")
    }
  } catch (error) {
    res.status(500).send(error)

  }
}

const checkChangePerms =  async (req, res, next) => {
  const { user } = req;
  const { id } = req.params;
  if (user.role == "ADMIN") {
    next()
  }
  try {
    if (user.id == id) {
      next()
    } else {
      res.status(400).send("Bạn không có quyền sửa tab này")
    }
  } catch (error) {
    res.status(500).send(error)
  }
}

module.exports = {
  checkExist,
  checkJobBelongs,
  checkApplicationBelongs,
  checkAlreadyApplied,
  checkProfileBelongs,
  checkProfileExists,
  checkSubTabBelongs,
  checkEmail,
  checkChangePerms
};
